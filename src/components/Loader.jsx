import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 2;
      if (current > 100) {
        current = 100;
        clearInterval(interval);
      }
      setProgress(current);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <h1 className="loader-text animated-gradient-text">LOADING</h1>
        <div className="loader-bar-container">
          <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="loader-percentage">{progress}%</span>
      </div>
    </div>
  );
};

export default Loader;
