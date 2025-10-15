import { useState } from "react";
import { projectsData } from "./projectsSessionData";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectsSession.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2 className="fade">Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((proj) => (
          <div key={proj.id} className="project-item fade" onClick={() => setSelectedProject(proj)}>
            <div className="image-wrapper">
              <img src={proj.image} alt={proj.title} />
              <div className={`status-badge ${proj.status === "Completo" ? "complete" : "in-progress"}`}>
                {proj.status}
              </div>
            </div>
            <h5 className="project-title">{proj.title}</h5>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal visible={!!selectedProject} project={selectedProject} handleClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;