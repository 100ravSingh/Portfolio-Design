import profileImg from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" style={{ textAlign: "center" }}>
      {/* Profile Photo */}
      <img
        src={profileImg}
        alt="Sourav Singh"
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
          border: "3px solid var(--accent)",
        }}
      />

      {/* Name & Role */}
      <h1>Sourav Singh</h1>
      <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
        Full Stack • Cloud • AI Engineer
      </p>

      {/* Actions */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <a href="/Resume.pdf" className="btn" download>
          Download Resume
        </a>

        <a
          href="/Resume.pdf"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "transparent", color: "var(--accent)", border: "1px solid var(--accent)" }}
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
