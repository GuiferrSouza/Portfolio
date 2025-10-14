import React from "react";

const Skills = () => {
  const skills = [
    "C#",
    ".NET",
    "SQL Server",
    "React",
    "Node.js",
    "Git",
    "VBA",
    "APIs REST",
  ];

  return (
    <section id="skills" className="skills">
      <h2>Tecnologias</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;