import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../style/Contacts.css"; // Import Contact styling sheet
const Contact = ({ profile }) => {
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending...' });

    // Prepare the email content for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: profile.name,
      reply_to: formData.email,
    };

    // Send email using EmailJS
    emailjs.send(
      'service_0xh0e63',
      'template_docqtx3',
      templateParams,
      '5j81Sv4zwCQAtsjAG'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus.submitted && !formStatus.success}
              >
                {formStatus.submitted && !formStatus.success ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus.message && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;