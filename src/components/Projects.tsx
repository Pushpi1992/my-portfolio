import React from "react";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: ProjectItem[] = [
  {
    id: "01",
    title: "Employee Management System",
    description:
      "A React application for managing employees, including create, update, delete and search functionality.",
    tags: ["React", "JavaScript", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "02",
    title: "Healthcare Mobile App",
    description:
      "A mobile application designed to provide users with healthcare and wellness services.",
    tags: ["React Native", "Node.js", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "03",
    title: "Developer Dashboard",
    description:
      "Responsive dashboard with analytics, user management and reusable UI components.",
    tags: ["React", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <p className="section-tag">FEATURED WORK</p>

        <div className="projects-header-row">
          <h2 className="section-title">Projects I've worked on</h2>
          <a href="#projects" className="view-all-link">
            View All Projects &rarr;
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id} id={`project-${project.id}`}>
              <div className="project-id">{project.id}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag-badge" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.liveUrl} className="project-link">
                  Live Demo &#8599;
                </a>
                <a href={project.githubUrl} className="project-link">
                  GitHub &#8599;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
