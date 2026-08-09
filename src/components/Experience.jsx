import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Freelance Independent Software Engineer",
    company: "Adihar Tech Solutions",
    location: "Hyderabad, India",
    type: "Contract",
    period: "May 2025 – April 2026",
    points: [
      "Developed a full-stack platform using React for the frontend and Django REST Framework for the backend, supporting multiple user roles.",
      "Built and maintained REST APIs with JWT authentication, role-based access control, and secure data management.",
      "Integrated PostgreSQL with Django ORM for efficient CRUD operations and complex relational data queries.",
      "Performed API testing, debugging, and optimization to improve reliability, data integrity, and page-load performance.",
      "Configured production deployments using Gunicorn, Nginx, and systemd on an Ubuntu VPS, including SSL/TLS security.",
      "Collaborated with clients to understand requirements and delivered features tailored to role-specific business needs.",
      "Used Git for version control and maintained clean, modular code following software engineering best practices.",
      "Ensured reliable frontend-backend integration through API documentation, endpoint validation, and systematic testing."
    ]
  },
  {
    role: "Contract AI Trainer",
    company: "Outlier AI",
    location: "Remote",
    type: "Contract",
    period: "September 2024 – January 2025",
    points: [
      "Reviewed and evaluated AI/LLM outputs for accuracy, reasoning quality, factual correctness, and contextual relevance.",
      "Provided structured feedback and annotations to improve the performance and reliability of machine learning and large language models.",
      "Identified incorrect or biased responses and generated corrected outputs aligned with project guidelines.",
      "Performed LLM evaluation tasks including response comparison, prompt validation, and quality scoring.",
      "Used Python, Pandas, and NumPy for data validation and analysis of structured AI training datasets.",
      "Followed standardized AI training and evaluation protocols to maintain consistency and quality across model assessments.",
      "Supported workflows related to AI model training, testing, and performance evaluation.",
      "Maintained high accuracy and consistency while completing assigned evaluation tasks within project deadlines."
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