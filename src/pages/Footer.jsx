import React from 'react';
import "../style/Footer.css"; // Import Footer styling sheet
const Footer = ({ profile }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 {profile.name}. All rights reserved.</p>
        <div className="social-links">
          <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;