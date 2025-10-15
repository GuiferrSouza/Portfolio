import { aboutData } from "./aboutSessionData";
import "./AboutSession.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div>
        <div>
          <img src={aboutData.profileImage} alt="Minha foto" className="profile-image fade" />
        </div>
        <div className="about-text">
          <h2 className="fade">Sobre Mim</h2>
          <p className="fade">{aboutData.description}</p>
        </div>
      </div>

      <ul className="about-list">
        {aboutData.list.map((item) => (
          <li key={item.id} className="fade">{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default About;