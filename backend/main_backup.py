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


# Allow React frontend to connect
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


# Create searchable text for every standard
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


# Create TF-IDF model
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

    # Convert user requirement into TF-IDF vector
    user_vector = vectorizer.transform([requirement])

    # Calculate similarity
    similarities = cosine_similarity(
        user_vector,
        standard_vectors
    )[0]

    recommendations = []

    for index, similarity in enumerate(similarities):

        score = round(float(similarity) * 100)

        if score > 0:
            item = standards[index]

            recommendations.append({
                "standard": item["standard"],
                "title": item["title"],
                "category": item["category"],
                "score": score
            })


    # Highest similarity first
    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True
    )


    # No suitable match
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


    # Best recommendation
    best = recommendations[0]


    return {
        "standard": best["standard"],
        "title": best["title"],
        "category": best["category"],
        "score": best["score"],
        "reason": (
            "This standard was selected based on the "
            "similarity between your requirement and "
            "the available Indian Standards."
        ),
        "other_recommendations": recommendations[1:4]
    }