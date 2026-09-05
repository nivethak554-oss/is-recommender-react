function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#020617",
        color: "#94a3b8",
        borderTop: "1px solid #334155",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h2 style={{ color: "white", margin: 0, fontSize: "20px" }}>
            IS<span style={{ color: "#60a5fa" }}>-Recommender</span>
          </h2>

          <p style={{ margin: "6px 0 0", fontSize: "14px" }}>
            AI-powered Indian Standards Recommendation Engine
          </p>
        </div>

        <p style={{ margin: 0, fontSize: "14px" }}>
          © 2026 IS-Recommender. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;