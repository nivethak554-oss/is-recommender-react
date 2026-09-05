function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #334155",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            margin: 0,
            color: "white",
          }}
        >
          IS<span style={{ color: "#60a5fa" }}>-Recommender</span>
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <a href="#home" style={linkStyle}>
            Home
          </a>

          <a href="#problem" style={linkStyle}>
            Problem
          </a>

          <a href="#demo" style={linkStyle}>
            Demo
          </a>

          <a href="#how-it-works" style={linkStyle}>
            How It Works
          </a>

          <a href="#technology" style={linkStyle}>
            Technology
          </a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};

export default Navbar;