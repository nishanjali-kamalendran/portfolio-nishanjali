import React from 'react';
import "../style/Education.css"; // Import Education styling sheet  
const Education = ({ education }) => {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-cards">
          {education.map(edu => (
            <div className="education-card" key={edu.id}>
              <h3>{edu.institution}</h3>
              <h4>{edu.degree}</h4>
              <span className="period">{edu.period}</span>
              {edu.courses.length > 0 && (
                <div className="courses">
                  <h5>Key Courses:</h5>
                  <div className="course-tags">
                    {edu.courses.map((course, index) => (
                      <span key={index} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;