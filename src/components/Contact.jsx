import React from 'react';
import './Contact.css';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-container reveal-up">
        <div className="contact-badge">
          <span className="pulse-dot"></span> Open to new opportunities
        </div>
        
        <h2 className="contact-heading">
          Let&apos;s connect and build<br />
          <span className="animated-gradient-text">software that ships.</span>
        </h2>
        
        <div className="contact-info">
          <a href="mailto:Vemulapallikrishnateja2@gmail.com" className="contact-link magnetic-btn hover-trigger">
            <Mail size={20} className="contact-icon" />
            Vemulapallikrishnateja2@gmail.com
          </a>
          <div className="contact-location">
            <MapPin size={20} className="contact-icon" />
            Based in Hyderabad, India
          </div>
        </div>
      </div>
      
      <footer className="footer reveal-up reveal-delay-2">
        <p className="footer-text">© 2026 Krishna Teja Vemulapalli. Handcrafted.</p>
        <div className="footer-links">
          <a href="#hero" className="hover-trigger">Top</a>
          <a href="https://www.linkedin.com/in/krishnatejavemulapalli/" target="_blank" rel="noreferrer" className="hover-trigger">LinkedIn</a>
          <a href="https://github.com/KrishnaTeja0002" target="_blank" rel="noreferrer" className="hover-trigger">GitHub</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
