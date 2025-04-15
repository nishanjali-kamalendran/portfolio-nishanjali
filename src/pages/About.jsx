import React from 'react';
import "../style/About.css"; // Import About styling sheet
import Nishanjali from "../assets/Nishanjali.jpeg"; // Import image

const About = ({ aboutMe }) => {
  if (!aboutMe || !aboutMe.summary) {
    return null;
  }
  
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={Nishanjali} alt="Nishanjali Kamalendran" />
          </div>
          <div className="about-text">
            <p>{aboutMe.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;