function Technology() {
  return (
    <section
      id="technology"
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
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >

        <p
          style={{
            color: "#60a5fa",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          TECHNOLOGY
        </p>

        <h2
          style={{
            fontSize: "48px",
            margin: "20px 0",
          }}
        >
          Powered by{" "}
          <span style={{ color: "#60a5fa" }}>
            AI & Intelligent Search
          </span>
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
            maxWidth: "750px",
            lineHeight: "1.7",
            marginBottom: "50px",
          }}
        >
          Our system combines artificial intelligence, semantic search
          and Indian Standards data to provide relevant recommendations.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >

          {/* AI */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #334155",
            }}
          >
            <div style={{ fontSize: "35px", marginBottom: "15px" }}>
              🤖
            </div>

            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Artificial Intelligence
            </h3>

            <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
              AI understands the user's technical requirement and
              identifies meaningful information from the input.
            </p>
          </div>

          {/* Semantic Search */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #334155",
            }}
          >
            <div style={{ fontSize: "35px", marginBottom: "15px" }}>
              🔎
            </div>

            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Semantic Search
            </h3>

            <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
              Instead of relying only on keywords, the system compares
              the meaning of requirements with standard information.
            </p>
          </div>

          {/* Standards Database */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #334155",
            }}
          >
            <div style={{ fontSize: "35px", marginBottom: "15px" }}>
              📚
            </div>

            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Standards Database
            </h3>

            <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
              Indian Standards data is organized so that relevant
              documents can be searched and retrieved efficiently.
            </p>
          </div>

          {/* Recommendation */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #334155",
            }}
          >
            <div style={{ fontSize: "35px", marginBottom: "15px" }}>
              🎯
            </div>

            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Smart Recommendation
            </h3>

            <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
              The system ranks matching standards and presents the
              most relevant recommendation with a confidence score.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Technology;