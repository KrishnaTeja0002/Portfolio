import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineer",
    company: "Independent Contractor",
    location: "Hyderabad, India",
    type: "Contract",
    period: "Sep 2024 – Present",
    points: [
      "Engineered full-stack web applications with React and Python, aligning architecture and delivery with client requirements.",
      "Built backend services with Django, Flask, and FastAPI to support dashboards, business workflows, and API-driven products.",
      "Designed and integrated secure REST APIs, authentication flows, and role-based access controls for production use cases.",
      "Modeled and optimized PostgreSQL and MySQL data layers, improving query performance and application reliability.",
      "Containerized services with Docker and supported cloud deployments on AWS and GCP for consistent release workflows.",
      "Integrated LLM-powered features and retrieval workflows to automate tasks and improve user-facing search experiences.",
      "Debugged application issues, profiled bottlenecks, and improved runtime performance across frontend and backend systems.",
      "Collaborated directly with stakeholders, translated product requirements into implementation plans, and documented delivery decisions.",
      "Maintained clean, modular codebases with an emphasis on readability, maintainability, and long-term extensibility."
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
