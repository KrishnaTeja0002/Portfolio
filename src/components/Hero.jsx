import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero-section" id="hero">
      <div className="hero-grid">
        <div className="hero-text-content">
          <div className="reveal-up is-visible">
            <p className="hero-subtitle">Hi, I&apos;m a Software Engineer</p>
          </div>
          
          <div className="reveal-up reveal-delay-1 is-visible">
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
              Krishna Teja
              <br />
              <span className="animated-gradient-text">Vemulapalli</span>
            </h1>
          </div>
          
          <div className="reveal-up reveal-delay-2 is-visible hero-desc-container">
            <p className="hero-description text-secondary">
              I build full-stack applications with React, Python, Django, and FastAPI.
              My work centers on clean architecture, reliable APIs, scalable data flows, and practical AI features that solve real product problems.
            </p>
          </div>

          <div className="hero-actions reveal-up reveal-delay-3 is-visible">
            <a href="#projects" className="magnetic-btn hover-trigger">
              View My Work
            </a>
            <div className="social-links">
              <a href="https://github.com/KrishnaTeja0002" target="_blank" rel="noreferrer" aria-label="Github" className="social-link hover-trigger">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/krishnatejavemulapalli/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link hover-trigger">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-container reveal-up reveal-delay-2 is-visible">
          <div className="profile-container-large">
            <div className="profile-image-wrapper-large glass-panel hover-trigger">
              <img src={profileImg} alt="Krishna Teja Vemulapalli" className="profile-image-large" />
              <div className="profile-highlight-large"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#skills" aria-label="Scroll Down" className="hover-trigger">
          <span className="scroll-text">Scroll</span>
          <ArrowDown size={16} className="scroll-icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
