export default function ProjectsSection({ data }) {
    if (!data || data.length === 0) return null
    return (
        <section id="projects">
            <div className="projects-container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {data.map((project) => (
                        <a key={project.id} href={project.url} className="project-card noise noise-light">
                            <div className="project-info">
                                <h3 className="project-title" translate="no">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <span className="project-view-message">View project</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}