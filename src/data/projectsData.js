import _1img from "../resources/1.jpeg";
import _2img from "../resources/2.jpeg";
import _3img from "../resources/3.jpeg";

const projectsData = [
    {
        id: 1,
        title: "Gerador de Orçamentos",
        status: "Completo",
        image: _1img,
        details: "Gerenciador de painéis baseado em catálogo de peças com exportação para Word. A solução busca automaticamente peças no banco de dados do usuário e organiza os dados em uma planilha Excel, que também contém informações de montagens, como painéis e kits de peças. Por meio de botões personalizados na faixa de opções do Excel, o usuário pode adicionar peças em grupos com dados expansíveis e contabilizáveis, e exporta-los para um documento Word customizado pelo próprio usuário, utilizando placeholders específicos.",
        techs: ["VBA", "Interop.Word", "Interop.Excel", "RibbonX Editor"],
        company: "EPLAN Brasil",
        obs: "Código protegido por questões de confidencialidade.",
        gallery: [_1img, _2img, _3img]
    }
];

export default projectsData;