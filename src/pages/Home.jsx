import React, { useState, useEffect } from 'react';
import "../style/Home.css";
import background from "../assets/background.jpeg";
import emailjs from 'emailjs-com';

const Home = () => {
    // Animation states
    const [loaded, setLoaded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

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

    // Profile data from Resume
    const profile = {
        name: "Nishanjali Kamalendran",
        title: "Software Engineering Undergraduate",
        contact: {
            phone: "0716672616",
            email: "nishanjali.kamal@gmail.com",
            github: "https://github.com/nishanjali-kamalendran",
            linkedin: "http://linkedin.com/in/nishanjali-kamalendran-b43502293"
        },
        summary: "Software Engineering undergraduate with a passion for problem-solving and developing innovative software solutions. Eager to collaborate with teams and apply technical skills to contribute to meaningful projects"
    };

    // Projects from CV
    const projects = [
        {
            id: 1,
            title: "SlotZi",
            year: 2024,
            tech: "React, Tailwind CSS, Node.js",
            description: "Mobile app and website for early reservations, enabling businesses to manage bookings efficiently with a React frontend, Tailwind CSS styling, and a Node.js backend.",
            category: "Web & Mobile"
        },
        {
            id: 2,
            title: "Real-Time Event Ticketing System",
            year: 2024,
            tech: "React, Spring Boot, Java",
            description: "Ticketing system with a React frontend and Spring Boot backend for real-time operations.",
            category: "Full Stack"
        },
        {
            id: 3,
            title: "Plane Management System",
            year: 2024,
            tech: "Java",
            description: "Scalable Java-based application for managing flight operations and passenger seating with real-time updates.",
            category: "Software Development"
        },
        {
            id: 4,
            title: "University Progression Outcome",
            year: 2024,
            tech: "Python",
            description: "Tool to analyze and visualize student performance, offering insights for academic improvement.",
            category: "Data Analysis"
        },
        {
            id: 5,
            title: "Climate Action Website",
            year: 2024,
            tech: "HTML, CSS, JavaScript",
            description: "Responsive website promoting climate action with engaging interactive features.",
            category: "Web Development"
        },
        {
            id: 6,
            title: "UPRISE",
            year: 2024,
            tech: "HTML, CSS, JavaScript",
            description: "Informative website that made it to the marketing phase at Idealize 24 held by University of Moratuwa, integrating dynamic features to attract participants.",
            category: "Web Development"
        }
    ];

    // Experience from CV
    const experiences = [
        {
            id: 1,
            role: "Sri Lanka Student Activity IE Coordinator",
            organization: "IEEE",
            period: "Feb 2025 - Present",
            description: ""
        },
        {
            id: 2,
            role: "Process Associate",
            organization: "HCLTechnologies Lanka - Colombo 02",
            period: "July 2024 - Jan 2025",
            description: "Managed customer inquiries via email and chat, ensuring timely and accurate responses. Analyzed and resolved issues effectively, escalating complex cases when needed. Developed strong communication skills through daily interactions with diverse customers."
        }
    ];

    // Education from CV
    const education = [
        {
            id: 1,
            institution: "Informatics Institute of Technology",
            degree: "BEng (Hons) Software Engineering",
            period: "Sept 2023 - Present",
            courses: [
                "Object Oriented Programming",
                "Database system",
                "Software Development Group Project",
                "Software Engineering Principles and Practice",
                "Software Development I",
                "Machine Learning and Data Mining",
                "Mathematics for Computing",
                "Trends in Computer Science",
                "Computer Systems Fundamentals",
                "Software Development II",
                "Web Design and Development",
                "Algorithms: Theory, Design and Implementation"
            ]
        },
        {
            id: 2,
            institution: "Methodist College - Colombo 03",
            degree: "Physical Science",
            period: "2008 - 2022",
            courses: ["Combined Mathematics", "Physics", "Chemistry", "General English", "ICT","Business Studies", "English Literature" ]
        }
    ];

    // Skills from CV
    const skills = [
        { name: "Java", category: "Programming", level: 85 },
        { name: "Python", category: "Programming", level: 80 },
        { name: "Software Testing", category: "QA", level: 75 },
        { name: "MySQL", category: "Database", level: 78 },
        { name: "React", category: "Frontend", level: 82 },
        { name: "JavaScript", category: "Programming", level: 83 },
        { name: "HTML", category: "Frontend", level: 90 },
        { name: "CSS", category: "Frontend", level: 87 },
        { name: "Machine Learning", category: "Data Science", level: 73 }
    ];

    // Achievements from CV
    const achievements = [
        "Represented the school at Srilanka Mathematics Competition 2019",
        "Awarded with honours at the Srilanka Olympiad Mathematics Foundation 2017",
        "Awarded for mathematics at Methodist college annual prize giving (2016,2017,2018)",
        "Represented the school at ANCQ 2018 and awarded with high distinction",
        "Python for Beginners - University of Moratuwa",
        "Web Design for Beginners - University of Moratuwa",
        "Programming Foundations: Software Testing/QA"
    ];

    // Club activities from CV
    const clubs = [
        {
            organization: "IEEE Computer Society",
            role: "CodeRally 5.0 - Organising committee (Delegates handling)"
        },
        {
            organization: "IEEE Student Branch of IIT",
            roles: [
                "Standing committee nominee",
                "IX 24 - Organising committee (Industrial Outreach)"
            ]
        },
        {
            organization: "SriLanka Student Actvitiy Committee (SLSAC)",
            roles: [
                "Industrial Outreach Coordinator",
            ]
        }
    ];

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
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


    // Categories for filtering projects
    const categories = [...new Set(projects.map(project => project.category))];
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    // Filter projects based on category
    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === activeCategory));
        }
    }, [activeCategory]);

    // Animation on mount and scroll effect
    useEffect(() => {
        // Animation on load
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 300);

        // Scroll effect for header
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initialize skill progress animations
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

        // Close mobile menu when clicking on a link
        const handleLinkClick = () => {
            if (menuOpen) {
                setMenuOpen(false);
            }
        };

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        // Cleanup
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
            skillObserver.disconnect();
            navLinks.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, [menuOpen]);

    return (
        <div className="netflix-portfolio">
            {/* Loading Animation */}
            <div className="netflix-loading" style={{ display: loaded ? 'none' : 'flex' }}></div>

            {/* Header with Netflix-style logo */}
            <header className={`netflix-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <h1 className="netflix-logo">NISHFLIX</h1>
                    <button
                        className="mobile-nav-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <nav className={menuOpen ? 'mobile-active' : ''}>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#achievements">Achievements</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero section */}
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

            {/* Featured Projects Section (Netflix style) */}
            <section className="projects-section" id="projects">
                <div className="container">
                    <h2 className="section-title">My Projects</h2>

                    <div className="category-filter">
                        <button
                            className={activeCategory === 'All' ? 'active' : ''}
                            onClick={() => setActiveCategory('All')}
                        >
                            All
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                className={activeCategory === category ? 'active' : ''}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="netflix-row">
                        {filteredProjects.map(project => (
                            <div className="netflix-card" key={project.id}>
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <div className="project-meta">
                                        <span className="year">{project.year}</span>
                                        <span className="tech">{project.tech}</span>
                                    </div>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
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

            {/* Education Section */}
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

            {/* Skills Section */}
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

            {/* Achievements Section */}
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

            {/* Clubs Section */}
            <section className="clubs-section">
                <div className="container">
                    <h2 className="section-title">Clubs & Activities</h2>
                    <div className="clubs-container">
                        {clubs.map((club, index) => (
                            <div className="club-item" key={index}>
                                <h3>{club.organization}</h3>
                                {club.role && <p>{club.role}</p>}
                                {club.roles && (
                                    <ul>
                                        {club.roles.map((role, roleIndex) => (
                                            <li key={roleIndex}>{role}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
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

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 {profile.name}. All rights reserved.</p>
                    <div className="social-links">
                        <a href={profile.contact.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;