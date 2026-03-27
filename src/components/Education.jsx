import React from 'react';
import './Education.css';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <div className="section-header reveal-up">
        <p className="section-subtitle">(04) / Academic Background</p>
        <h2 className="section-title">Education & Research</h2>
      </div>

      <div className="education-grid">
        <div className="edu-column reveal-up reveal-delay-1">
          <h3 className="column-label"><GraduationCap size={20} /> Education</h3>
          <div className="edu-card glass-panel hover-trigger">
            <h4>B.Tech — Computer Science and Engineering - Data Science</h4>
            <p className="edu-institution">Malla Reddy College of Engineering (MRCE)</p>
            <p className="edu-period text-secondary">Nov 2020 – Jun 2024 · Hyderabad</p>
            <div className="edu-tags">
              <span>Data Structures</span>
              <span>Machine Learning</span>
              <span>Database Systems</span>
              <span>Software Engineering</span>
            </div>
          </div>

          <h3 className="column-label" style={{ marginTop: '3rem' }}><Award size={20} /> Certifications</h3>
          <div className="edu-card glass-panel hover-trigger">
            <h4>Generative AI for Data Engineering</h4>
            <p className="edu-institution">Coursera · IBM</p>
            <p className="edu-period text-secondary">Issued Jun 2025 · ID: G8AR7D857AR3</p>
          </div>
          <div className="edu-card glass-panel hover-trigger" style={{ marginTop: '1rem' }}>
            <h4>Data Science Course</h4>
            <p className="edu-institution">Skillvoid Technologies</p>
            <p className="edu-period text-secondary">Issued Jan 2023 · ID: SKLVD09CC199</p>
          </div>
        </div>

        <div className="edu-column reveal-up reveal-delay-2">
          <h3 className="column-label"><BookOpen size={20} /> Research & Publications</h3>
          <div className="edu-card glass-panel hover-trigger">
            <h4>A Review on Heart Disease Prediction System</h4>
            <p className="edu-institution">International Journal for Research in Applied Science & Engineering Technology (IJRASET)</p>
            <p className="edu-period text-secondary">Published: May 1, 2024</p>
            <ul className="research-points">
              <li>Co-authored a research paper analyzing ML approaches for predicting heart disease using patient clinical data</li>
              <li>Reviewed predictive models including ANN, genetic algorithms, and automated model optimization (AutoML)</li>
              <li>Explored how ML identifies complex patterns in medical datasets to improve early diagnosis and clinical decision support</li>
            </ul>
            <a 
              href="https://www.ijraset.com/research-paper/a-review-on-heart-disease-prediction-system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="paper-link hover-trigger"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: '#ae85ff', fontSize: '0.9rem', fontWeight: '500' }}
            >
              View Published Paper <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
