import React from "react";
import "./About.css";
import profilep from "../../assets/images/p1.png"; // Your picture path
const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        {/* Left section: profile image */}
        <div className="about-image">
          <img src={profilep} alt="Umar Profile" />
        </div>

        {/* Right section: About text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I’m Umar, a passionate MERN Stack Developer with experience in
            Python and SQL. I build responsive, user-friendly web applications
            and teach practical coding skills. I love creating projects that
            solve real-world problems and help students and clients grow.
          </p>
          <p>
            My skills include building full-stack web applications using React,
            Node.js, Express, MongoDB, and integrating APIs. I also have experience
            with deployment, Docker, cloud basics, and client-oriented development.
          </p>
          <a href="/contact" className="about-button">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default About;
