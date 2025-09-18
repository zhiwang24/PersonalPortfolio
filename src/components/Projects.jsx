import React from "react";
import { Container } from "react-bootstrap";
import "./Projects.css";

export function Projects({ id = "project", title = "Featured Projects", items = [] }) {
  return (
    <section id={id} className="projects-section">
      <Container className="projects-container">
        <div className="projects-header">{title}</div>

        <div className="projects-grid">
          {items.map((p, i) => (
            <article className="project-tile" key={p.title + i} style={{ backgroundImage: `url(${p.image})` }}>
              <div className="project-overlay" />
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                {p.desc && <p className="project-desc">{p.desc}</p>}
                <div className="project-actions">
                  {p.demo && (
                    <a className="btn-gradient" href={p.demo} target="_blank" rel="noreferrer noopener">View Demo</a>
                  )}
                  {p.github && (
                    <a className="btn-gradient btn-secondary" href={p.github} target="_blank" rel="noreferrer noopener">GitHub</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
