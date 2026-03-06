import React, { useEffect, useState } from 'react';
import './FloatingHearts.css';

// Import images
import img1 from '../assets/1acd2b13-390f-4f39-adb1-f4cfefb17264.jpg';
import img2 from '../assets/475902fa-dcc3-4b4e-9c4d-940c99bce2c6.jpg';
import img3 from '../assets/4f22c20d-16be-42ff-8a81-1c6eddd822f7.jpg';
import img4 from '../assets/610505287_1279615797326112_6721771468832532955_n.jpg';
import img5 from '../assets/610978366_808576432205503_3844477797273207243_n.jpg';
import img6 from '../assets/a262e9c3-0167-485e-bdd9-e19ebcf6aaf3.jpg';
import img7 from '../assets/bcf02cd7-bc99-4027-9360-d78ac0f4ea9d.jpg';
import img8 from '../assets/dfc5a7d0-3308-447b-a1be-cfaa19fccf95.jpg';
import img9 from '../assets/9d602ed8-73cc-49c8-9e4a-95882598c237.jpg';
import img10 from '../assets/0f26b379-a019-4644-a996-d5feb0844f16.jpg'; // The newly added photo

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  // Array of css classes representing different mask shapes
  const shapes = ['shape-heart', 'shape-circle', 'shape-blob', 'shape-star'];

  useEffect(() => {
    // Generate initial floating items with images and random shapes
    const generateHearts = () => {
      const newHearts = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 90}%`, 
        size: Math.random() * 120 + 180, // INCREASED BIGGER: between 180px and 300px
        duration: Math.random() * 20 + 20, // keep the total duration similar 20-40s 
        delay: Math.random() * 20,
        img: images[i % images.length],
        rotation: (Math.random() - 0.5) * 40, // random start rotation
        shapeClass: shapes[Math.floor(Math.random() * shapes.length)] // Random shape
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="hearts-background">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`photo-heart ${heart.shapeClass}`}
          style={{
            left: heart.left,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            backgroundImage: `url(${heart.img})`,
            '--start-rotation': `${heart.rotation}deg`,
            '--end-rotation': `${heart.rotation + (Math.random() > 0.5 ? 20 : -20)}deg`
          }}
        />
      ))}
    </div>
  );
}
