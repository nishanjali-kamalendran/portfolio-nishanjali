import React from 'react';
import "../style/Hero.css"; // Import Hero styling sheet
import background from "../assets/background.jpeg";

const Hero = ({ profile, loaded }) => {
  return (
    <section className={`hero-section ${loaded ? 'loaded' : ''}`} id="about">
      <div className="image-background">
        <img src={background} alt="background" />
      </div>
      <div className="hero-content">
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.summary}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a
            href="/Nishanjali Kamalendran.pdf"
            className="btn btn-secondary"
            download="Nishanjali Kamalendran.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;