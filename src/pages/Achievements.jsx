import React from 'react';
import "../style/Achievements.css"; // Import Achievements styling sheet
const Achievements = ({ achievements }) => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Certificates</h2>
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div className="achievement-item" key={index}>
              <div className="achievement-icon">🏆</div>
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;