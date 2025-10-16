import me from "../../resources/me.jpeg";

export const aboutData = {
    profileImage: me,
    description: "Estou sempre explorando novas formas de unir tecnologia e criatividade, criando aplicações, redesenhando conceitos e experimentando soluções que desafiam o óbvio. Cada projeto é uma oportunidade de aprender, testar ideias e evoluir, e este portfólio registra tanto o que já realizei quanto o que ainda quero descobrir, refletindo meu jeito de pensar e a paixão por transformar ideias em experiências concretas.",
    list: [
        {
            id: 1,
            text: (
                <>
                    Atualmente sou <strong>Desenvolvedor de Software Pleno</strong> na{" "}
                    <strong>EPLAN Brasil</strong>, onde trabalho em projetos internos do software
                    de engenharia EPLAN utilizando VBA (Excel e Word), C# (Core e Framework) e
                    JavaScript (React + Vite + Electron) para aplicações desktop.
                </>
            )
        },
        {
            id: 2,
            text: (
                <>
                    Estou cursando <strong>Ciência da Computação</strong> na{" "}
                    <strong>
                        FEI (Centro Universitário da Fundação Educacional Inaciana Padre Sabóia de
                        Medeiros)
                    </strong>
                    , atualmente no sexto semestre, buscando aprofundar meus conhecimentos em
                    algoritmos, estruturas de dados e desenvolvimento de sistemas.
                </>
            )
        },
        {
            id: 3,
            text: (
                <>
                    Paralelamente, estou atuando em uma nova empresa de cibersegurança,
                    desenvolvendo um Anti-Vírus em <strong>Rust</strong> e uma{" "}
                    <strong>extensão para o Google Chrome</strong> voltada à detecção de sites
                    maliciosos. O projeto utiliza técnicas de machine learning treinadas com
                    datasets de URLs classificadas como seguras e perigosas.
                </>
            )
        }
    ]
};
