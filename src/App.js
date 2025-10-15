import { useEffect } from "react";
import Header from "./components/HeaderSession/HeaderSession";
import About from "./components/AboutSession/AboutSession";
import Projects from "./components/ProjectsSession/ProjectsSession";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './App.css';

export default function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade");
    elements.forEach((el, index) => {
      setTimeout(() => { el.classList.add("show") }, index * 150);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}