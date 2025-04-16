import React, { useEffect } from 'react';
import "../style/Skills.css"; // Import Achievements styling sheet
const Skills = ({ skills }) => {
  // Initialize skill progress animations
  useEffect(() => {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target.querySelector('.skill-progress');
          if (progress) {
            progress.style.width = progress.getAttribute('data-level');
          }
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-item').forEach(item => {
      skillObserver.observe(item);
    });

    // Cleanup
    return () => {
      skillObserver.disconnect();
    };
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: 0 }}
                  data-level={`${skill.level}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


