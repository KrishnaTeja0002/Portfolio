import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  
  // Need to store exact mouse coordinates
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    // Only initialize on non-touch devices
    if (window.innerWidth <= 768) return;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Update cursor immediately for low latency
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
      }

      // Add hover class to body when hovering interactive elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-trigger')
      ) {
        document.body.classList.add('hovering');
      } else {
        document.body.classList.remove('hovering');
      }
    };

    // Smooth follower animation using requestAnimationFrame
    const render = () => {
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.15;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.15;
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${cursor.current.x - 20}px, ${cursor.current.y - 20}px, 0)`;
      }
      
      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    const renderId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(renderId);
      document.body.classList.remove('hovering');
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor" 
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      <div 
        ref={followerRef} 
        className="custom-cursor-follower" 
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
};

export default Cursor;
