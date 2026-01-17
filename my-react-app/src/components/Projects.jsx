import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="card-grid">
        {projects.map(p => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div className="tags">
              {p.tech.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
