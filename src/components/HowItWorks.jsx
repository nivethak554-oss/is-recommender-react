function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
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
          HOW IT WORKS
        </p>

        <h2
          style={{
            fontSize: "36px",
            fontWeight:"bold",
            color:"#ffffff",
            textAlign:"center",
            marginBottom: "16px",
            lineHeight: "1.3",
          }}
        >
          From Requirement to{" "}
          <span style={{ color: "#38bdf8" }}>
            Standard
          </span>{" "}
          in 3 Simple Steps
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
            maxWidth: "750px",
            lineHeight: "1.7",
          }}
        >
          Our AI-powered system understands your requirement and
          identifies the most relevant Indian Standard.
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >

          {/* Step 1 */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              flex: "1",
              minWidth: "250px",
              border: "1px solid #334155",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#1e40af",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              01
            </div>

            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Enter Requirement
            </h3>

            <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
              Describe your product, material or technical requirement
              using simple natural language.
            </p>
          </div>

          {/* Step 2 */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              flex: "1",
              minWidth: "250px",
              border: "1px solid #334155",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#1e40af",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              02
            </div>

            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              AI Analysis
            </h3>

            <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
              The AI analyzes the requirement and matches it with
              relevant Indian Standard information.
            </p>
          </div>

          {/* Step 3 */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              flex: "1",
              minWidth: "250px",
              border: "1px solid #334155",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#1e40af",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              03
            </div>

            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Get Recommendation
            </h3>

            <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
              The system provides the most relevant IS Standard along
              with its relevance score and details.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;