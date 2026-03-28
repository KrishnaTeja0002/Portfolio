import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-header reveal-up">
        <p className="section-subtitle">(01) / What I work with</p>
        <h2 className="section-title">Technical Expertise</h2>
      </div>

      <div className="skills-grid reveal-up reveal-delay-1">
        <div className="skill-category glass-panel">
          <h3 className="category-title">Application Engineering</h3>
          <div className="skills-list">
            {['React.js', 'JavaScript', 'Python', 'Django', 'FastAPI', 'REST APIs'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category glass-panel">
          <h3 className="category-title">Data & Backend Systems</h3>
          <div className="skills-list">
            {['PostgreSQL', 'MySQL', 'SQLite', 'Django ORM', 'JWT Auth', 'Role-Based Access'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category glass-panel">
          <h3 className="category-title">AI-Enabled Product Work</h3>
          <div className="skills-list">
            {['LLM Integration', 'Prompt Engineering', 'RAG Workflows', 'Agentic AI', 'Scikit-learn'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category glass-panel">
          <h3 className="category-title">Delivery & Infrastructure</h3>
          <div className="skills-list">
            {['Git', 'Docker', 'Nginx', 'Gunicorn', 'AWS', 'Linux'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
