import React from "react";
import "./Projects.css";

const projectsData = [
  // {
  //   title: "Live Weather App",
  //   description: "Fetches weather data from public APIs and displays a responsive dashboard.",
  //   tech: "React, Tailwind, OpenWeather API",
  //   demo: "https://your-weather-app.vercel.app",
  //   github: "https://github.com/ufb482-hub/weather-app",
  //   image: "/images/weather-app.png",
  // },
  {
    title: "E-commerce Store",
    description: "Full-stack MERN app with authentication, products, cart, and checkout.",
    tech: "React, Node.js, Express, MongoDB",
    // demo: "https://your-ecommerce.vercel.app",
    github: "https://github.com/ufb482-hub/e-commerce-platform",
    image: "/images/e-commerce.png",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong> {project.tech}</p>
              <div className="project-links">
                {/* <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
