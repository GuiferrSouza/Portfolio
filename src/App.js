import { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
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