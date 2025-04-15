import React from 'react';
import "../style/Experience.css"; // Import Experience styling sheet
const Experience = ({ experiences }) => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.organization}</h4>
                <span className="period">{exp.period}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;