function ProblemSection() {
  return (
    <section
      id="problem"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "120px 40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

        <p style={{ color: "#60a5fa", fontWeight: "bold" }}>
          THE PROBLEM
        </p>

        <h2 style={{ fontSize: "48px", margin: "20px 0" }}>
          Finding the Right Indian Standard is Difficult
        </h2>

        <p style={{ color: "#cbd5e1", fontSize: "18px", maxWidth: "750px" }}>
          Indian Standards contain thousands of specifications and
          technical requirements. Finding the correct standard manually
          can be time-consuming and confusing.
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >

          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              flex: "1",
              minWidth: "250px",
            }}
          >
            <div style={{ fontSize: "35px" }}>📚</div>
            <h3>Too Many Standards</h3>
            <p style={{ color: "#94a3b8" }}>
              Thousands of Indian Standards make it difficult to
              identify the correct document quickly.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              flex: "1",
              minWidth: "250px",
            }}
          >
            <div style={{ fontSize: "35px" }}>⏳</div>
            <h3>Time Consuming</h3>
            <p style={{ color: "#94a3b8" }}>
              Manually searching through technical documents takes
              valuable time and effort.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              flex: "1",
              minWidth: "250px",
            }}
          >
            <div style={{ fontSize: "35px" }}>⚠️</div>
            <h3>Wrong Selection</h3>
            <p style={{ color: "#94a3b8" }}>
              Selecting an unsuitable standard can create compliance
              and implementation problems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProblemSection;