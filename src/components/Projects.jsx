import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

import proj1 from '../assets/project-1-new.jpg';
import proj2 from '../assets/project-2-new.jpg';
import proj3 from '../assets/project-3-new.png';
import proj4 from '../assets/project-4-new.jpg';

const projects = [
  {
    id: 1,
    title: "Heart Disease Prediction System",
    category: "Machine Learning / AutoML",
    year: "Jan 2024",
    image: proj1,
    color: "#5a29e4",
    desc: "ML model using Python, TPOT and ANN with full preprocessing pipeline. Deployed via Flask.",
    tags: ["Python", "AutoML", "Flask", "ANN"],
    link: "https://github.com/KrishnaTeja0002/heart-disease-prediction-system"
  },
  {
    id: 2,
    title: "Real-time Object Detection",
    category: "Computer Vision / AI",
    year: "2024",
    image: proj2,
    color: "#00d2ff",
    desc: "Integrated object detection and tracking in real-time streams using advanced neural net architectures.",
    tags: ["Python", "Computer Vision", "Deep Learning"],
    link: "https://github.com/KrishnaTeja0002/integrated-object-detection-and-tracking"
  },
  {
    id: 3,
    title: "Sales Overview Dashboard",
    category: "Data Analytics / Power BI",
    year: "May 2024",
    image: proj3,
    color: "#29e4b6",
    desc: "Interactive sales analytics dashboard backed by Python for data cleaning and MySQL for structured storage.",
    tags: ["Python", "Pandas", "MySQL", "Power BI"],
    link: "https://github.com/KrishnaTeja0002/Sales-Overview-Dashboard"
  },
  {
    id: 4,
    title: "Personal Developer Portfolio",
    category: "Web Application / Design",
    year: "2024",
    image: proj4,
    color: "#ae85ff",
    desc: "High-end, production-level personal developer portfolio website that looks handcrafted, premium, and human-developed.",
    tags: ["React.js", "Advanced CSS3", "UI/UX Design"],
    link: "https://github.com/KrishnaTeja0002/Portfolio"
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleHover = (e) => {
      // Create interesting parallax specifically for the project cards
      const cards = document.querySelectorAll('.project-card');
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleHover);
    return () => window.removeEventListener('mousemove', handleHover);
  }, []);

  return (
    <section className="section projects-section" id="projects">
      <div className="section-header reveal-up">
        <p className="section-subtitle">(03) / Things I've built</p>
      </div>
      
      <div className="projects-grid" ref={containerRef}>
        {projects.map((project, index) => (
          <div key={project.id} className={`project-card glass-panel reveal-up reveal-delay-${(index % 3) + 1}`}>
            <a 
              href={project.link || "#"} 
              target={project.link ? "_blank" : "_self"} 
              rel={project.link ? "noreferrer" : ""}
              className="project-image-wrapper hover-trigger" 
              style={{ display: 'block', cursor: project.link ? 'pointer' : 'default' }}
            >
              <div 
                className="project-image" 
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="project-overlay" style={{ background: project.color }}>
                <span className="view-project-text">
                  {project.link ? "View on GitHub" : "View Case"} <ArrowUpRight size={24} />
                </span>
              </div>
            </a>
            
            <div className="project-info">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category" style={{ marginBottom: '10px' }}>{project.category}</p>
                <p className="project-desc text-secondary" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                     <span key={tag} style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: '#ae85ff' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
