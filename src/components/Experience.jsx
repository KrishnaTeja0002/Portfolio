import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Adihar Tech Solutions",
    location: "Hyderabad, India",
    type: "Contract",
    period: "September 2024 – Present",
    points: [
      "Build responsive, reusable frontend interfaces with React, translating product requirements into polished user experiences.",
      "Develop and maintain backend services and REST APIs with Django REST Framework, including authentication and role-based access control.",
      "Work with PostgreSQL, SQL, and Django ORM to manage relational data, implement CRUD workflows, and maintain data integrity.",
      "Integrate frontend features with backend APIs, test and debug application flows, and use Git to maintain reliable, modular code."
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <span>(02) / Where I've worked</span>
        <h2>Experience</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item reveal-up reveal-delay-${(index % 3) + 1}`}
          >
            <div className="timeline-dot">
              <Briefcase size={16} />
            </div>

            <div className="timeline-content glass-panel hover-trigger">
              <div className="timeline-header">
                <div className="role-info">
                  <h3 className="role-title">{exp.role}</h3>

                  <div className="company-details">
                    <span className="company">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>

                <div className="period-badge">
                  {exp.period}
                </div>
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