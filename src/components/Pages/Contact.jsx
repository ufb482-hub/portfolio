import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">

        {/* Left: Contact info */}
        <div className="contact-info">
          <p><strong>Phone:</strong> +92 3156114604</p>
          <p><strong>Email:</strong> <a href="mailto:ufb482@gmail.com">ufb482@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/umar-farooq-1b7548382/" target="_blank" rel="noopener noreferrer">linkedin.com/in/umar-farooq</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/ufb482-hub" target="_blank" rel="noopener noreferrer">github.com/ufb482-hub</a></p>
          <p><strong>X/Twitter:</strong> <a href="https://x.com/ufb482" target="_blank" rel="noopener noreferrer">x.com/ufb482</a></p>
        </div>

        {/* Right: Contact form */}
        <div className="contact-form">
          <form action="https://formspree.io/f/mgvnknzr" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
