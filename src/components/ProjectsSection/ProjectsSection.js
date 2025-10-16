import { useState, forwardRef } from "react";
import data from "../../data/projectsData";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectsSection.css";

const ProjectsSection = forwardRef((_, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects" ref={ref}>
      <h2 className="fade">Projetos</h2>
      <div className="projects-grid">
        {data.map((proj) => (
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
});

export default ProjectsSection;