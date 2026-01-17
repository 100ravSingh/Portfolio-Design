import { skills } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <ul className="grid">
        {Array.isArray(skills) &&
          skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
      </ul>
    </section>
  );
}
