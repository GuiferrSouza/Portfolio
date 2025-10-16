import defaultImg from "../resources/default.jpeg";
import profileImg from "../resources/profile.jpeg";

const projectsData = [
    {
        id: 1,
        title: "Gerador de Orçamentos",
        status: "Completo",
        image: defaultImg,
        details: "Gerenciador de painéis baseado em catálogo de peças com exportação para Word.",
        techs: ["VBA", "Interop.Word", "Interop.Excel", "RibbonX Editor"],
        company: "EPLAN Brasil",
        obs: "Código protegido por questões de confidencialidade.",
        gallery: [defaultImg, profileImg]
    },
    {
        id: 2,
        title: "Painel de Controle Web",
        status: "Em andamento",
        image: defaultImg,
        details: "Dashboard interativo para visualização de dados de produção, com gráficos em tempo real.",
        techs: ["React", "Node.js", "PostgreSQL"],
        company: "EPLAN Brasil",
        obs: "Projeto interno.",
        gallery: [defaultImg]
    }
];

export default projectsData;