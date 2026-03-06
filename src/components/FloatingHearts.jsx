import React, { useEffect, useState } from 'react';
import './FloatingHearts.css';

// Import images
import img1 from '../assets/1acd2b13-390f-4f39-adb1-f4cfefb17264.jpg';
import img2 from '../assets/475902fa-dcc3-4b4e-9c4d-940c99bce2c6.jpg';
import img3 from '../assets/4f22c20d-16be-42ff-8a81-1c6eddd822f7.jpg';
import img6 from '../assets/bcf02cd7-bc99-4027-9360-d78ac0f4ea9d.jpg';
import img7 from '../assets/dfc5a7d0-3308-447b-a1be-cfaa19fccf95.jpg';
import img8 from '../assets/9d602ed8-73cc-49c8-9e4a-95882598c237.jpg';
import img9 from '../assets/0f26b379-a019-4644-a996-d5feb0844f16.jpg'; 

// Removed the 'a262e9c3...' image which was likely the white page
// Removed the '6105...' and '6109...' images since the user deleted them
const images = [img1, img2, img3, img6, img7, img8, img9];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Array of css classes representing different mask shapes
    const shapes = ['shape-heart', 'shape-circle', 'shape-blob', 'shape-star'];

    // Generate initial floating items with images and random shapes
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 80 + 10,
        top: Math.random() * 100 + 110,
        size: Math.random() * 120 + 180, 
        duration: Math.random() * 20 + 20, 
        delay: Math.random() * 20,
        img: images[i % images.length],
        startRot: (Math.random() - 0.5) * 40,
        endRot: (Math.random() - 0.5) * 40 + (Math.random() > 0.5 ? 20 : -20),
        shapeClass: shapes[Math.floor(Math.random() * shapes.length)] 
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  // Make them dragabble
  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    e.target.dataset.dragging = 'true';
    e.target.dataset.startX = e.clientX;
    e.target.dataset.startY = e.clientY;
    
    // Pause animation by forcing inline styles
    const rect = e.target.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(e.target);
    
    e.target.style.animation = 'none';
    e.target.style.bottom = 'auto'; // Disable CSS bottom so 'top' works
    e.target.style.left = `${rect.left}px`;
    e.target.style.top = `${rect.top}px`;
    // Lock the current transform matrix (keeps its rotation and scale exactly where it was)
    e.target.style.transform = computedStyle.transform;
  };

  const handlePointerMove = (e) => {
    if (e.target.dataset.dragging === 'true') {
      const dx = e.clientX - parseFloat(e.target.dataset.startX);
      const dy = e.clientY - parseFloat(e.target.dataset.startY);
      
      const currentLeft = parseFloat(e.target.style.left) || 0;
      const currentTop = parseFloat(e.target.style.top) || 0;

      e.target.style.left = `${currentLeft + dx}px`;
      e.target.style.top = `${currentTop + dy}px`;
      
      e.target.dataset.startX = e.clientX;
      e.target.dataset.startY = e.clientY;
    }
  };

  const handlePointerUp = (e) => {
    e.target.releasePointerCapture(e.pointerId);
    e.target.dataset.dragging = 'false';
  };

  return (
    <div className="hearts-background">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`photo-heart ${heart.shapeClass}`}
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            backgroundImage: `url(${heart.img})`,
            '--start-rotation': `${heart.startRot}deg`,
            '--end-rotation': `${heart.endRot}deg`
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        />
      ))}
    </div>
  );
}
