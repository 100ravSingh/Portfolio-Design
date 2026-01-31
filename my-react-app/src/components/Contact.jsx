export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
        Feel free to reach out or connect with me on these platforms:
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <li>
          📧{" "}
          <a href="mailto:yourname@gmail.com">
            yourname@gmail.com
          </a>
        </li>

        <li>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin-id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li>
          💻{" "}
          <a
            href="https://github.com/your-github-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>

        <li>
          📘{" "}
          <a
            href="https://www.facebook.com/your-facebook-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>

        <li>
          📸{" "}
          <a
            href="https://www.instagram.com/your-instagram-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </section>
  );
}
