import React, { useState, useEffect } from 'react';
import "../style/Projects.css"; // Import Projects styling sheet
const Projects = ({ projects }) => {
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
  }, [activeCategory, projects]);

  return (
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
  );
};

export default Projects;