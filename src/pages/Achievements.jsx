import React from 'react';
import "../style/Achievements.css"; // Ensure this path is correct

const Achievements = ({ achievements }) => {
  // If no achievements are provided, show a placeholder message
  if (!achievements || achievements.length === 0) {
    return (
      <section className="achievements-section" id="achievements">
        <div className="achievements-container">
          <h2 className="section-title">Achievements & Certificates</h2>
          <p className="no-achievements">No achievements to display yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        <h2 className="section-title">Achievements & Certificates</h2>
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div
              className="achievement-card"
              key={`achievement-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="achievement-content">
                <div className="achievement-icon">
                  {achievement.image ? (
                    <img 
                      src={achievement.image} 
                      alt={achievement.title || "Achievement"} 
                      className="achievement-image"
                    />
                  ) : (
                    '</>'
                  )}
                </div>
                <div className="achievement-details">
                  {achievement.title && <h3 className="achievement-title">{achievement.title}</h3>}
                  {achievement.description && <p className="achievement-description">{achievement.description}</p>}
                  {achievement.date && <span className="achievement-date">{achievement.date}</span>}
                </div>
              </div>
              {achievement.issuer && (
                <div className="achievement-footer">
                  <span className="achievement-issuer">Issued by: {achievement.issuer}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;