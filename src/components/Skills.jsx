import React, { useEffect, useRef } from 'react';
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
          <h3 className="category-title">Backend & Web</h3>
          <div className="skills-list">
            {['Python', 'Django', 'Flask', 'REST APIs', 'React.js', 'JWT'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category glass-panel">
          <h3 className="category-title">Databases</h3>
          <div className="skills-list">
            {['PostgreSQL', 'MySQL', 'SQLite', 'Django ORM'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category glass-panel">
          <h3 className="category-title">AI & Automation</h3>
          <div className="skills-list">
            {['LLM Integration', 'Prompt Engineering', 'Agentic AI', 'AutoML', 'Scikit-learn'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category glass-panel">
          <h3 className="category-title">DevOps & Tools</h3>
          <div className="skills-list">
            {['Git', 'Nginx', 'Gunicorn', 'GCP', 'AWS', 'Linux'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
