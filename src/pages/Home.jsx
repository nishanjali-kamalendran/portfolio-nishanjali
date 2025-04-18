import React, { useState, useEffect } from 'react';
import "../style/Base.css"; 


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

//logos
import logo1 from "../assets/linkedin.png";
import logo2 from "../assets/olympiad.png";
import logo3 from "../assets/slmf.png";
import logo4 from "../assets/metho.png";
import logo5 from "../assets/ancqq.png";
import logo6 from "../assets/uom.jpeg";
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
            tech: "React, CSS, Node.js, Supabase",
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
            category: "Full Stack"
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
            organization: "HCL Technologies Lanka - Colombo 02",
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
            description: "Contributed as a member of the Delegates Handling Team for CodeRally 5.0, a multifaceted event featuring a series of workshops and a 24-hour hackathon. I managed logistics and participant coordination, and also took part in the hackathon, enhancing my organizational and problem-solving skills in a high-pressure environment.",
            extraImages: [ex1, ex2, ex3, ex4]
        },
        { 
            id: 2, 
            src: img2, 
            alt: "INCEPTION", 
            year: "2024",
            match: "IEEE",
            description: "Volunteered at the IEEE Installation Ceremony, assisting with coordination and logistics to ensure seamless execution. My contribution was recognized for its impact, showcasing my dedication, teamwork, and event management capabilities.",
            extraImages: []
        },
        { 
            id: 3, 
            src: img3, 
            alt: "IX 24", 
            year: "2024",
            match: "IEEE Student Branch of IIT",
            description: "Served as an Industrial Outreach Volunteer for IX 24, a UI/UX-focused event. Facilitated workshops and supported operations during the 24-hour experience, collaborating with industry professionals to deliver a smooth and enriching program for attendees.",
            extraImages: []
        },
        { 
            id: 4, 
            src: img4, 
            alt: "Rootcode AI", 
            year: "2024",
            match: "Rootcode AI Community",
            description: "Participated in the Rootcode AI Community Meetup in Colombo, attended by over 180 AI enthusiasts. The event featured a keynote on 'Unified Intelligence: The Art of Multi-Modal AI'—a deep dive into the evolving landscape of artificial intelligence. It was an inspiring experience that expanded my knowledge and network within the AI space.",
            extraImages: []
        },
        { 
            id: 5, 
            src: img5, 
            alt: "Industrial Visit", 
            year: "2024",
            match: "Sysco LABS Sri Lanka",
            description: "Contributed to organizing and hosting an industrial visit to Sysco LABS Sri Lanka for students from IIT. The session included a company introduction, an overview of Sysco’s marketing strategies, and engaging activities such as an icebreaker and a CV workshop. A great opportunity to interact with future tech professionals and share industry insights.",
            extraImages: []
        },
        { 
            id: 6, 
            src: img6, 
            alt: "Hult Prize IIT", 
            year: "2024",
            match: "Informatics Institute of Technology",
            description: "Served as Sub-Committee Lead for Team Recruitment at Sri Lanka’s first-ever Hult Prize event. Oversaw the registration of 180+ startup teams, engaged with young entrepreneurs, and supported the execution of a high-energy, innovation-driven competition. This role sharpened my leadership, coordination, and strategic planning skills.",
            extraImages: []
        },
        { 
            id: 7, 
            src: img7, 
            alt: "HCL Tech - Cricket Carnival", 
            year: "2024",
            match: "HCL Technologies Lanka",
            description: "Took part in the HCL Tech Cricket Carnival, representing a mixed-gender team that advanced to the semi-finals. The event was a great platform to showcase team spirit, communication, and collaboration in a fun and competitive setting.",
            extraImages: []
        },
        { 
            id: 8, 
            src: img8, 
            alt: "HCL Tech - Secret Santa", 
            year: "2024",
            match: "HCL Technologies Lanka",
            description: "Joined in the festive celebrations during HCL Tech’s Secret Santa event. The day was filled with laughter, thoughtful gift exchanges, and holiday cheer—an amazing opportunity to connect with colleagues and strengthen team bonds in a lighthearted environment.",
            extraImages: []
        },
        { 
            id: 9, 
            src: img9, 
            alt: "HCL Tech - Farewell", 
            year: "2025",
            match: "HCL Technologies Lanka",
            description: "Had a heartfelt farewell at HCL Tech, surrounded by amazing colleagues and friends. It was a moment of reflection, gratitude, and celebration of the memories made. I’m thankful for the support, growth, and camaraderie experienced throughout my time there.",
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
    { name: "Software Testing", category: "Quality Assurance", level: 75 },
    { name: "MySQL", category: "Database", level: 78 },
    { name: "React", category: "Frontend Framework", level: 82 },
    { name: "JavaScript", category: "Programming", level: 83 },
    { name: "HTML", category: "Frontend", level: 90 },
    { name: "Tailwind CSS", category: "Frontend", level: 87 },
    { name: "Machine Learning", category: "Data Science & AI", level: 73 },
    { name: "Test Automation", category: "Quality Assurance", level: 70 }
    ];

    // Achievements from CV
    const achievements = [
        {
          title: "Represented the school at Sri Lanka Mathematics Competition",
          date: "2019",
          issuer: "SLMC",
          image: logo3
        },
        {
          title: "Awarded with honours at the Sri Lanka Olympiad Mathematics Foundation",
          date: "2017",
          issuer: "Sri Lanka Olympiad Mathematics Foundation",
          image: logo2
        },
        {
          title: "Awarded for Mathematics at Methodist College Annual prize giving",
          date: "2016-2018",
          issuer: "Methodist College",
          image: logo4
        },
        {
          title: "Represented the school at ANCQ and awarded with High Distinction",
          date: "2018",
          issuer: "ANCQ",
          image: logo5
        },
        {
          title: "Python for Beginners",
          date: "2024",
          issuer: "University of Moratuwa",
          image: logo6
        },
        {
          title: "Web Design for Beginners",
          date: "2024",
          issuer: "University of Moratuwa",
          image: logo6
        },
        {
          title: "Programming Foundations - Software Testing/QA",
          date: "2025",
          issuer: "LinkedIn Learning",
          image: logo1
        }
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