import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Metavara Technologies",
    location: "Bengaluru",
    type: "Full-time",
    period: "Dec 2025 – Present",
    points: [
      "Developing and maintaining backend services for the company's web platforms using Python",
      "Integrating REST APIs with frontend apps for dynamic content management",
      "Debugging backend services and ensuring secure frontend–backend communication"
    ]
  },
  {
    role: "Independent Software Developer",
    company: "Adihar Tech Solutions",
    location: "Hyderabad",
    type: "Freelance",
    period: "May 2025 – Dec 2025",
    points: [
      "Built full-stack platform with React + Django REST Framework with JWT auth & role-based access",
      "Integrated PostgreSQL via Django ORM; deployed on Ubuntu VPS with Gunicorn, Nginx & SSL",
      "Delivered real-time dashboards with dynamic filtering and export functionality"
    ]
  },
  {
    role: "AI Trainer (Contractor)",
    company: "Outlier",
    location: "Remote",
    type: "Freelance",
    period: "Sep 2024 – Feb 2025",
    points: [
      "Reviewed LLM-generated code and text responses using structured rating criteria",
      "Provided edits and feedback to improve AI model accuracy and safety",
      "Ensured data quality for machine learning training datasets"
    ]
  }
];

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-header reveal-up">
        <p className="section-subtitle">(02) / Where I've worked</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item reveal-up reveal-delay-${(index%3)+1}`}>
            <div className="timeline-dot">
              <Briefcase size={16} />
            </div>
            <div className="timeline-content glass-panel hover-trigger">
              <div className="timeline-header">
                <div className="role-info">
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="company-details">
                    <span className="company-name">{exp.company}</span>
                    <span className="dot-separator">•</span>
                    <span className="job-type">{exp.type}</span>
                    <span className="dot-separator">•</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <div className="period-badge">{exp.period}</div>
              </div>
              <ul className="timeline-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
