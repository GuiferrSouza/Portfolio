import { forwardRef } from 'react';
import data from "../../data/aboutData";
import Header from "../Header/Header";
import "./AboutSection.css";

export default forwardRef((_, ref) => {
  return (
    <section id="about" className="about" ref={ref}>
      <Header />
      <div className="about-content">
        <div>
          <img src={data.profileImage} alt="Minha foto" className="profile-image fade" />
        </div>
        <div className="about-text">
          <h2 className="fade">Sobre Mim</h2>
          <p className="fade">{data.description}</p>
        </div>
      </div>
    </section>
  );
});