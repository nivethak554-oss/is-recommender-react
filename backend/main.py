from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import os

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


app = FastAPI(
    title="IS-Recommender API",
    description="AI Powered Indian Standards Recommendation Engine",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load standards dataset
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

with open(
    os.path.join(BASE_DIR, "standards.json"),
    "r",
    encoding="utf-8"
) as file:
    standards = json.load(file)


# Create searchable text
standard_texts = []

for item in standards:
    text = (
        item["title"]
        + " "
        + item["category"]
        + " "
        + " ".join(item["keywords"])
    )

    standard_texts.append(text)


# TF-IDF model
vectorizer = TfidfVectorizer(
    lowercase=True,
    stop_words="english"
)

standard_vectors = vectorizer.fit_transform(standard_texts)


@app.get("/")
def home():
    return {
        "message": "IS-Recommender Backend is running!"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


@app.post("/recommend")
def recommend(requirement: str):

    user_text = requirement.lower()

    # Semantic similarity
    user_vector = vectorizer.transform([requirement])

    similarities = cosine_similarity(
        user_vector,
        standard_vectors
    )[0]

    recommendations = []

    for index, similarity in enumerate(similarities):

        item = standards[index]

        # Count exact keyword matches
        matched_keywords = []

        for keyword in item["keywords"]:
            if keyword.lower() in user_text:
                matched_keywords.append(keyword)

        # Base semantic score
        semantic_score = float(similarity) * 100

        # Keyword bonus
        keyword_bonus = len(matched_keywords) * 8

        final_score = min(
            round(semantic_score + keyword_bonus),
            98
        )

        if final_score > 0:

            recommendations.append({
                "standard": item["standard"],
                "title": item["title"],
                "category": item["category"],
                "score": final_score,
                "matched_keywords": matched_keywords
            })


    # Sort by score
    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True
    )


    # No match
    if not recommendations:

        return {
            "standard": "No exact match",
            "title": "No suitable Indian Standard found",
            "category": "Unknown",
            "score": 0,
            "reason": (
                "Try describing the product, material or "
                "technical requirement in more detail."
            ),
            "other_recommendations": []
        }


    # Best result
    best = recommendations[0]


    # Reason
    if best["matched_keywords"]:

        reason = (
            "The requirement matches the standard through "
            "semantic similarity and these relevant terms: "
            + ", ".join(best["matched_keywords"])
        )

    else:

        reason = (
            "The standard was selected based on semantic "
            "similarity with the requirement."
        )


    return {
        "standard": best["standard"],
        "title": best["title"],
        "category": best["category"],
        "score": best["score"],
        "reason": reason,
        "other_recommendations": recommendations[1:4]
    }