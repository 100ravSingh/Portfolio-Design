import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [light, setLight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.className = light ? "light" : "";
  }, [light]);

  return (
    <nav className="navbar">
      <span className="brand">Sourav Singh</span>

      <button className="nav-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {sections.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <button className="theme-btn" onClick={() => setLight(!light)}>
            {light ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
