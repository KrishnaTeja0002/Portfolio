import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Contract Software Developer",
    company: "Independent Contractor",
    location: "Hyderabad, India",
    type: "Contract",
    period: "Sep 2024 – Present",
    points: [
      "Developed responsive full-stack web applications using modern frameworks and technologies.",
      "Built efficient backend services in Python using Django, Flask, and FastAPI.",
      "Ensured all applications met specific project requirements and delivered consistent functionality.",
      "Followed the software development life cycle to plan, build, and deliver quality code.",
      "Collaborated with clients to implement new features and functional improvements.",
      "Maintained and optimized database systems using PostgreSQL and MySQL.",
      "Managed the deployment of applications on cloud platforms like AWS and Google Cloud.",
      "Used Docker containers to create stable and reproducible development environments.",
      "Developed secure RESTful APIs for seamless communication between frontend and backend.",
      "Implemented secure user authentication systems using JWT and OAuth2 protocols.",
      "Configured user roles and permissions to protect sensitive application data.",
      "Integrated Large Language Models (LLMs) to automate and enhance business workflows.",
      "Applied prompt engineering techniques to improve AI-generated responses.",
      "Used AI patterns such as RAG (Retrieval-Augmented Generation) to improve search and data retrieval logic.",
      "Identified and fixed software bugs through systematic debugging and profiling.",
      "Optimized SQL queries via the Django ORM to improve database performance.",
      "Implemented caching strategies to improve web page load speeds for users.",
      "Presented technical details and project status clearly during team meetings.",
      "Created detailed documentation to ensure codebase maintainability and clarity.",
      "Maintained a focus on writing clean, modular, and readable code for all projects."
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
