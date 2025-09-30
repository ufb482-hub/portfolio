import React from "react";
import "./Home.css"; // External CSS file
import profilep from "../../assets/images/p1.png"; // Your picture path

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Left section: text */}
        <div className="home-text">
          <h1>Hello, I'm Umar</h1>
          <h2>MERN Stack Developer | Python & SQL Enthusiast</h2>
          <p>
            I build modern, responsive web applications and teach practical
            coding skills. Check out my projects and skills below!
          </p>
          <a href="/contact" className="home-button">
            Hire Me
          </a>
        </div>

        {/* Right section: profile picture */}
        <div className="home-image">
          <img src={profilep} alt="Umar Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;

