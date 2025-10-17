import { forwardRef } from 'react';
import Microlink from '@microlink/react'
import data from "../../data/projectsData";
import "./ProjectsSection.css";

<Microlink url='https://www.youtube.com/watch?v=9P6rdqiybaw' />

export default forwardRef((_, ref) => {
  return (
    <section id="projects" className="projects" ref={ref}>
      <h2 className="fade">Projetos</h2>
      <div className="project-list">
        {data.map((proj) => (
          <div key={proj.id} className="project-item fade">
            <div className="project-item-content">
              <h4 className="project-title">{proj.title}</h4>
              <p className="project-details">
                {proj.private && <p className="project-private">Código protegido por questões de confidencialidade.</p>}
                <span className="project-status">{proj.status}</span>
              </p>
            </div>
            <Microlink url={proj.url} size="small" media="logo" />
          </div>
        ))}
      </div>
    </section>
  );
});