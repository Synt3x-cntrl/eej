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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate initial hearts with images
    const generateHearts = () => {
      const newHearts = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 90}%`, // keep away from very edge
        size: Math.random() * 50 + 70, // size between 70px and 120px
        duration: Math.random() * 15 + 15, // slower floating 15-30s
        delay: Math.random() * 20,
        img: images[i % images.length],
        rotation: (Math.random() - 0.5) * 40, // random start rotation
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
          className="photo-heart"
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
