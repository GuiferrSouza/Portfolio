const Header = () => {
    return (
        <header className="header">
            <h1 className="fade">Guilherme Ferreira de Souza</h1>
            <div>
                <p className="fade">Desenvolvedor de Software</p>
                <nav>
                    <a className="fade" href="#about">Sobre</a>
                    <a className="fade" href="#projects">Projetos</a>
                    <a className="fade" href="#skills">Tecnologias</a>
                    <a className="fade" href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;