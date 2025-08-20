import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>E-commerce Web App</h3>
        <p>React frontend + Spring Boot backend + MySQL database.</p>
        <a href="https://github.com/yourusername/project1" target="_blank" rel="noreferrer">GitHub</a>
      </div>

      <div className="project-card">
        <h3>Blog Application</h3>
        <p>Full stack blog with authentication & CRUD APIs.</p>
        <a href="https://github.com/yourusername/project2" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Projects;
