import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="card-grid">
        {Array.isArray(projects) &&
          projects.map((project) => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {Array.isArray(project.tech) &&
                  project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
