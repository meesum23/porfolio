import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'A web app built with React and Node.js.', link: '#' },
    { title: 'Project 2', description: 'A responsive portfolio website.', link: '#' },
    { title: 'Project 3', description: 'An e-commerce platform.', link: '#' },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;