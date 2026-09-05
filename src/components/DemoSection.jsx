import { useState } from "react";

function DemoSection() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRecommendation = async () => {
    if (input.trim() === "") {
      setResult(null);
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        ` https://is-recommender-react.onrender.com/recommend?requirement=${encodeURIComponent(
          input
        )}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong");
      }

      setResult(data);
    } catch (error) {
      console.error(error);

      setResult({
        error:
          "Backend connection failed. Make sure FastAPI is running.",
      });
    }

    setLoading(false);
  };

  // Match status based on score
  const getMatchStatus = (score) => {
    if (score >= 80) {
      return {
        text: "High Match",
        color: "#4ade80",
        background: "rgba(34, 197, 94, 0.1)",
      };
    }

    if (score >= 60) {
      return {
        text: "Good Match",
        color: "#facc15",
        background: "rgba(250, 204, 21, 0.1)",
      };
    }

    return {
      text: "Possible Match",
      color: "#fb923c",
      background: "rgba(249, 115, 22, 0.1)",
    };
  };

  return (
    <section
      id="demo"
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "white",
        padding: "120px 40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              color: "#60a5fa",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            AI RECOMMENDATION ENGINE
          </p>

          <h2
            style={{
              fontSize: "36px",
              fontWeight:"bold",
              color:"#ffffff",
              textAlign:"center",
              marginBottom: "16px",
            }}
          >
            Find the Right{" "}
            <span style={{ color: "#38bdf8" }}>
              Indian Standard
            </span>
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              maxWidth: "700px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            Describe your product, material or technical requirement
            and let our intelligent recommendation engine find the
            most relevant Indian Standard.
          </p>
        </div>

        {/* Input Card */}
        <div
          style={{
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
            borderRadius: "18px",
            padding: "28px",
          }}
        >
          <label
            style={{
              display: "block",
              color: "#e2e8f0",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            Enter your requirement
          </label>

          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setResult(null);
            }}
            placeholder="Example: Structural steel for building construction"
            style={{
              width: "100%",
              height: "130px",
              boxSizing: "border-box",
              padding: "16px",
              borderRadius: "10px",
              border: "1px solid #475569",
              backgroundColor: "#0f172a",
              color: "white",
              fontSize: "16px",
              outline: "none",
              resize: "vertical",
              lineHeight: "1.5",
            }}
          />

          <button
            onClick={handleRecommendation}
            disabled={loading}
            style={{
              marginTop: "18px",
              padding: "13px 26px",
              border: "none",
              borderRadius: "9px",
              backgroundColor: loading ? "#475569" : "#3b82f6",
              color: "white",
              fontSize: "15px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Analyzing..." : "Get Recommendation"}
          </button>

          {/* Result */}
          {result && !result.error && (
            <div
              style={{
                marginTop: "30px",
                padding: "28px",
                borderRadius: "16px",
                backgroundColor: "#0f172a",
                border: "1px solid rgba(96, 165, 250, 0.4)",
              }}
            >
              {/* Result Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    margin: 0,
                  }}
                >
                  RECOMMENDED STANDARD
                </p>

                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    color: getMatchStatus(result.score).color,
                    backgroundColor:
                      getMatchStatus(result.score).background,
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  {getMatchStatus(result.score).text}
                </span>
              </div>

              {/* Standard Name */}
              <h3
                style={{
                  color: "#60a5fa",
                  fontSize: "36px",
                  margin: "18px 0 8px",
                }}
              >
                {result.standard}
              </h3>

              {/* Title */}
              <p
                style={{
                  color: "#e2e8f0",
                  fontSize: "18px",
                  margin: "0 0 8px",
                  lineHeight: "1.5",
                }}
              >
                {result.title}
              </p>

              {/* Category */}
              {result.category && (
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    margin: "8px 0 0",
                  }}
                >
                  Category: {result.category}
                </p>
              )}

              {/* Score */}
              <div style={{ marginTop: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "9px",
                  }}
                >
                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: "14px",
                    }}
                  >
                    Relevance Score
                  </span>

                  <span
                    style={{
                      color: "#4ade80",
                      fontWeight: "bold",
                    }}
                  >
                    {result.score}%
                  </span>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "#334155",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${result.score}%`,
                      height: "100%",
                      backgroundColor: "#22c55e",
                      borderRadius: "10px",
                      transition: "width 0.5s ease",
                    }}
                  ></div>
                </div>
              </div>

              {/* Why This Standard */}
              <div
                style={{
                  marginTop: "25px",
                  padding: "18px",
                  borderRadius: "10px",
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                }}
              >
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    fontWeight: "600",
                    margin: "0 0 8px",
                  }}
                >
                  WHY THIS STANDARD?
                </p>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {result.reason}
                </p>
              </div>

              {/* Matched Keywords */}
              {result.matched_keywords &&
                result.matched_keywords.length > 0 && (
                  <div style={{ marginTop: "24px" }}>
                    <p
                      style={{
                        color: "#94a3b8",
                        fontSize: "13px",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}
                    >
                      MATCHED KEYWORDS
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      {result.matched_keywords.map((keyword) => (
                        <span
                          key={keyword}
                          style={{
                            padding: "6px 11px",
                            borderRadius: "20px",
                            backgroundColor: "rgba(59, 130, 246, 0.12)",
                            border: "1px solid rgba(96, 165, 250, 0.3)",
                            color: "#93c5fd",
                            fontSize: "13px",
                          }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* Other Recommendations */}
              {result.other_recommendations &&
                result.other_recommendations.length > 0 && (
                  <div style={{ marginTop: "28px" }}>
                    <p
                      style={{
                        color: "#94a3b8",
                        fontSize: "13px",
                        fontWeight: "600",
                        letterSpacing: "1px",
                        marginBottom: "12px",
                      }}
                    >
                      OTHER RELEVANT STANDARDS
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {result.other_recommendations.map((item) => (
                        <div
                          key={item.standard}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "15px",
                            padding: "16px",
                            borderRadius: "10px",
                            backgroundColor: "#1e293b",
                            border: "1px solid #334155",
                          }}
                        >
                          <div>
                            <p
                              style={{
                                color: "#60a5fa",
                                fontWeight: "600",
                                margin: 0,
                              }}
                            >
                              {item.standard}
                            </p>

                            <p
                              style={{
                                color: "#94a3b8",
                                fontSize: "14px",
                                margin: "5px 0 0",
                                lineHeight: "1.4",
                              }}
                            >
                              {item.title}
                            </p>

                            <p
                              style={{
                                color: "#64748b",
                                fontSize: "12px",
                                margin: "5px 0 0",
                              }}
                            >
                              {item.category}
                            </p>
                          </div>

                          <span
                            style={{
                              color: "#4ade80",
                              fontWeight: "bold",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {item.score}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}

          {/* Error */}
          {result?.error && (
            <div
              style={{
                marginTop: "25px",
                padding: "16px",
                borderRadius: "10px",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                color: "#fca5a5",
              }}
            >
              {result.error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DemoSection;