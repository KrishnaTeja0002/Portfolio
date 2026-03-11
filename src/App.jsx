import React, { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { revealOnScroll } from './utils/animations';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial loading animation simulator
    const timer = setTimeout(() => {
      setLoading(false);
      // Initialize scroll reveal after load
      setTimeout(() => {
        revealOnScroll();
      }, 100);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      {loading ? (
        <Loader />
      ) : (
        <div className="main-content">
          <div className="animated-bg-sphere" style={{ top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'var(--accent-glow)' }}></div>
          <div className="animated-bg-sphere" style={{ bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'rgba(92, 45, 145, 0.2)', animationDelay: '-5s' }}></div>
          
          <main className="container">
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
