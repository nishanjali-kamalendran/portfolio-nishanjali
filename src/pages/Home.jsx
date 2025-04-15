import React, { useState, useEffect } from 'react';
import "../style/Base.css"; // Import base styling sheet

// Image imports
import background from "../assets/background.jpeg";
import img6 from "../assets/hult.jpg";
import img2 from "../assets/incep.jpg";
import img3 from "../assets/ix.jpg";
import img4 from "../assets/rootcode.jpg";
import img5 from "../assets/sysco.jpg";
import img1 from "../assets/coderally.jpg";
import img7 from "../assets/cricket.jpg";
import img8 from "../assets/santa.jpg";
import img9 from "../assets/farwell1.jpg";
import ex1 from "../assets/code_1.jpg";
import ex2 from "../assets/code_2.jpg";
import ex3 from "../assets/code_3.jpg";
import ex4 from "../assets/code_4.jpg";
import Nishanjali from "../assets/Nishanjali.jpeg";

// Component imports
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Achievements from './Achievements';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    // Animation states
    const [loaded, setLoaded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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

        // Cleanup
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Profile data from Resume
    const profile = {
        name: "Nishanjali Kamalendran",
        title: "Software Engineering Undergraduate",
        summary: "I am a Software Engineering undergraduate with a passion for developing innovative applications and solving complex problems.",
        contact: {
            phone: "0716672616",
            email: "nishanjali.kamal@gmail.com",
            github: "https://github.com/nishanjali-kamalendran",
            linkedin: "http://linkedin.com/in/nishanjali-kamalendran-b43502293"
        }
    };

    // About Me
    const aboutMe = {
        summary: "I am a Software Engineering undergraduate with a passion for developing innovative applications and solving complex problems. I have experience in full-stack development, software testing, and data analysis, and I am eager to learn new technologies to enhance my skills. I am seeking opportunities to work on exciting projects and collaborate with talented professionals to create impactful solutions."
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

    // Gallery images from CV 
    const galleryImages = [
        { 
            id: 1, 
            src: img1, 
            alt: "CodeRally 5.0", 
            year: "2024",
            match: "IEEE Computer Society of IIT",
            description: "I was part of the Delegates Handling Team for CodeRally 5.0, which included multiple workshops followed by a 24-hour hackathon. I helped manage event logistics and participant coordination, while also participating in the hackathon. It was an invaluable experience that sharpened my organizational and problem-solving skills.",
            extraImages: [ex1,ex2,ex3,ex4]
        },
        { 
            id: 2, 
            src: img2, 
            alt: "INCEPTION", 
            year: "2024",
            match: "IEEE",
            description: "I was recognized for my contribution as a volunteer at the Installation Ceremony. I assisted with event coordination and logistics, ensuring everything ran smoothly and efficiently. This recognition highlights my dedication and teamwork skills.",
            extraImages: []
        },
        { 
            id: 3, 
            src: img3, 
            alt: "IX 24", 
            year: "2024",
            match: "IEEE Student Branch of IIT",
            description: "As an Industrial Outreach Volunteer for IX 24, a UI/UX event, I helped facilitate multiple workshops and supported the 24-hour event. My role involved coordinating with industry professionals and ensuring a seamless experience for attendees, contributing to the success of the event.",
            extraImages: []
        },
        { 
            id: 4, 
            src: img4, 
            alt: "Rootcode AI", 
            year: "2024",
            match: "Rootcode AI Community",
            description: "I participated in the AI Community Meetup in Colombo, organized by Root Code, which saw over 180 AI enthusiasts in attendance. The event featured a keynote by Munsif on 'Unified Intelligence: The Art of Multi-Modal AI,'exploring the principles and impact of multi-modal AI. It was inspiring to see such enthusiasm and growth in the community, and I look forward to the next meetup!",
            extraImages: []
        },
        { 
            id: 5, 
            src: img5, 
            alt: "Industrial Visit", 
            year: "2024",
            match: "Sysco LABS Sri Lanka",
            description: "I was part of the team that welcomed students from IIT for an industry visit to Sysco. The session included an overview of Sysco's culture, an introduction to the marketing team, and engaging activities like an icebreaker and a CV creation workshop. It was a great opportunity to connect with future tech leaders and share insights about the dynamic industry.",
            extraImages: []
        },
        { 
            id: 6, 
            src: img6, 
            alt: "Hult Prize IIT", 
            year: "2024",
            match: "Informatics Institute of Technology",
            description: "I had the privilege of serving as the Sub-Committee Lead for Team Recruitment under the Startup Team for Sri Lanka's first-ever Hult Prize – Hult Prize IIT. With over 180 registered teams, I played a key role in engaging aspiring startup founders and managing team registrations. Working with an amazing team, including Nishvaraj Kamalananthan, Kavishani Yoganathan, Linushankaran Janarththanan, Saranujan Gunanesan, Niththilan Santhasoruban, THAHESHAN SURESH, and Nishanjali Kamalendran, was truly enriching. A special thanks to Thaviru Hettiarachchi and Saad Mazhar for their invaluable guidance. This experience deepened my passion for entrepreneurship, leadership, and teamwork.",
            extraImages: []
        },
        { 
            id: 7, 
            src: img7, 
            alt: "HCL Tech - Circket Carnival", 
            year: "2024",
            match: "HCL Technologies Lanka",
            description: "I participated in the HCL Tech Cricket Carnival as part of a team with 2 girls and 9 guys. Our team made it to the semi-finals, showcasing great teamwork and sportsmanship. It was a fantastic experience, combining fun, competition, and collaboration.",
            extraImages: []
        },
        { 
            id: 8, 
            src: img8, 
            alt: "HCL Tech - Secret Santa", 
            year: "2024",
            match: "HCL Technologies Lanka",
            description: "We had an awesome Secret Santa event at HCL Tech, and was part of the fun! 🎅🎁 It was a day filled with laughter, surprise gifts, and plenty of holiday cheer. We exchanged thoughtful presents, and it was a great way to bond with colleagues and bring some festive spirit to the office. So much fun and full of surprises! ",
            extraImages: []
        },
        { 
            id: 9, 
            src: img9, 
            alt: "HCL Tech - Farewell", 
            year: "2025",
            match: "HCL Technologies Lanka",
            description: "I had an unforgettable farewell at HCL Tech, surrounded by wonderful colleagues and friends. It was a day filled with laughter, memories, and heartfelt goodbyes. I'm truly grateful for the experiences and connections made during my time there, and I'll cherish these moments as I move forward. A huge thank you to everyone for making it so special!",
            extraImages: []
        },
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
            degree: "Advancel Level - Physical Science", 
            period: "2008 - 2022",
            courses: ["Combined Mathematics", "Physics", "Chemistry", "GIT" ]
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

    // Modal states for Gallery
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showMore, setShowMore] = useState(false);

    // Form states for Contact
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
        
        // Here you would implement your email sending functionality
        // For now, simulate success after 2 seconds
        setTimeout(() => {
            setFormStatus({
                submitted: true,
                success: true,
                message: 'Message sent successfully! I will get back to you soon.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 2000);
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

    return (
        <div className="netflix-portfolio">
            {/* Loading Animation */}
            <div className="netflix-loading" style={{ display: loaded ? 'none' : 'flex' }}></div>

            {/* Pass props to components */}
            <Navbar 
                scrolled={scrolled} 
                menuOpen={menuOpen} 
                toggleMenu={toggleMenu} 
            />
            
            <Hero 
                profile={profile} 
                loaded={loaded} 
                background={background}
            />
            
            <About 
                aboutMe={aboutMe} 
                profileImage={Nishanjali}
            />
            
            <Projects 
                projects={filteredProjects}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            
            <Experience experiences={experiences} />
            
            <Education education={education} />
            
            <Skills skills={skills} />
            
            <Achievements achievements={achievements} />
            
            <Gallery 
                galleryImages={galleryImages}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                showMore={showMore}
                setShowMore={setShowMore}
            />
            
            <Contact 
                profile={profile}
                formData={formData}
                formStatus={formStatus}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            
            <Footer profile={profile} />
        </div>
    );
};

export default Home;