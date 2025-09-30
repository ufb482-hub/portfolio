import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Full-Stack Web Development",
    description: "Build responsive and scalable web applications using MERN stack (MongoDB, Express, React, Node.js).",
  },
  {
    title: "API Integration",
    description: "Integrate third-party APIs (Weather, News, GitHub) and build REST & GraphQL APIs for your projects.",
  },
  {
    title: "Deployment & Hosting",
    description: "Deploy React + Node.js apps on Vercel, Render, or Heroku with CI/CD pipelines.",
  },
  {
    title: "UI/UX Design",
    description: "Design user-friendly interfaces and interactive pages using Figma, Tailwind CSS, and Canvas.",
  },
  {
    title: "Freelance & Client Solutions",
    description: "Help clients get projects live, optimize workflow, and provide full-stack solutions for startups.",
  },
];

const Services = () => {
  return (
    <div className="services-container" id="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
