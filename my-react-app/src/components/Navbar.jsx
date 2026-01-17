import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", light);
  }, [light]);

  return (
    <nav className="navbar">
      <span className="brand">Sourav Singh</span>

      <button
        type="button"
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {["hero", "about", "skills", "projects", "contact"].map((id) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => setOpen(false)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}

        <li>
          <button
            type="button"
            className="theme-btn"
            onClick={() => setLight((v) => !v)}
          >
            {light ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
