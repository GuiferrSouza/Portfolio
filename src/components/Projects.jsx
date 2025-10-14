const Projects = () => {
  const projects = [
    {
      title: "Sistema de Controle de Estoque",
      description:
        "Aplicação interna desenvolvida em C#/.NET com SQL Server e relatórios em Power BI. Código privado por confidencialidade.",
      image: "/images/estoque.png",
      tech: ["C#", ".NET", "SQL Server"],
    },
    {
      title: "Painel IoT",
      description:
        "Dashboard React integrado a dispositivos IoT via API REST. Código fechado por uso interno da empresa.",
      image: "/images/iot-dashboard.png",
      tech: ["React", "Node.js", "REST API"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="fade">Projetos</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <img className="fade" src={p.image} alt={p.title} />
            <h3 className="fade">{p.title}</h3>
            <p className="fade">{p.description}</p>
            <p className="tech fade">
              <strong>Tecnologias:</strong> {p.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;