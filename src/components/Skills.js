import React from "react";
import { Container } from "react-bootstrap";
import "./Skills.css"; // copy the CSS below into this file

export default function Skills({
  id = "skill",
  title = "Skills & Tech Stack",
  groups = [],
}) {
  return (
    <section id={id} className="skills-section">
      <Container className="skills-container">
        <div className="skills-header">{title}</div>

        <div className="skills-grid">
          {groups.map((g) => (
            <article key={g.label} className="skills-card">
              <h3 className="skills-title">{g.label}</h3>
              <ul className="skills-list" role="list">
                {g.items.map((t) => (
                  <li key={t} className="skill-pill" tabIndex={0} aria-label={`${g.label}: ${t}`}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
