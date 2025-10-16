import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection/AboutSection";
import UpdatesSection from "./components/UpdatesSection/UpdatesSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade");
    elements.forEach((el, index) => {
      setTimeout(() => { el.classList.add("show") }, index * 150);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="app">
        <AboutSection ref={(el) => (sectionsRef.current[0] = el)} />
        <UpdatesSection ref={(el) => (sectionsRef.current[1] = el)} />
        <ProjectsSection ref={(el) => (sectionsRef.current[2] = el)} />
      </div>

      <div className="section-indicator">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={activeSection === index ? 'active' : ''}
            onClick={() => { scrollToSection(index) }}
            aria-label={`Ir para seção ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}