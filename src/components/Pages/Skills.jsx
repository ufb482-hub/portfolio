import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "SQL", icon: "/icons/sql.png" },
  { name: "Docker", icon: "/icons/docker.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
