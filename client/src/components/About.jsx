import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2 className="typewriter-heading">About <span className="yellow">Me</span></h2>

      <div className="about-content">
        <div className="about-left">
          <p className="about-para">
            I'm a passionate <span className="highlight">Frontend Developer</span> who has built several projects using <span className="highlight">JavaScript</span> and <span className="highlight">React</span>. I'm also skilled in <span className="highlight">MERN Stack</span> development and currently learning <span className="highlight">Java</span> to expand my backend knowledge. I love crafting responsive and visually appealing websites.
          </p>

          <div className="about-details-box">
            <p><span className="label">Name:</span> S.Kaviya</p>
            <p><span className="label">DOB:</span> 02-11-2003</p>
            <p><span className="label">Email:</span> kaviya21103@gmail.com</p>
            <p><span className="label">Phone:</span> +91 8072463340</p>
            <p><span className="label">Location:</span> Perambalur, Tamil Nadu, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


