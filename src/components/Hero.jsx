function Hero() {
  const goToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#0f172a", // Dark navy blue background
        color: "#ffffff"
      }}
    >
      <p style={{ color: "#38bdf8", fontWeight: "600", letterSpacing: "1px", marginBottom: "12px", textTransform: "uppercase" }}>
        AI-Powered Indian Standards
      </p>

      <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "#ffffff", marginBottom: "20px", lineHeight: "1.2" }}>
        Find the Right <span style={{ color: "#38bdf8" }}>IS Standard</span> Instantly
      </h1>

      <p style={{ color: "#cbd5e1", fontSize: "18px", maxWidth: "600px", marginBottom: "28px" }}>
        An AI-powered recommendation engine that helps users discover relevant Indian Standards quickly and accurately.
      </p>

      <button
        onClick={goToDemo}
        style={{
          padding: "12px 24px",
          backgroundColor: "#0284c7",
          color: "#ffffff",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Try Recommendation
      </button>
    </section>
  );
}

export default Hero;