import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import './Greeting.css';

export default function Greeting() {
  return (
    <header className="greeting-container">
      <div className="title-section">
        <Sparkles className="sparkle left" size={24} />
        <h1>Олон Улсын Эмэгтэйчүүдийн Өдрийн Мэнд!</h1>
        <Sparkles className="sparkle right" size={24} />
      </div>
      
      <p className="subtitle">
        Хамгийн хайртай хоёр эмэгтэйдээ Мартын 8-ны баярын мэнд хүргэе! 
        <Heart className="heart-inline" size={18} fill="var(--primary)" />
      </p>
      
      <div className="floral-divider">
        <span>🌸</span>
        <div className="line"></div>
        <span>🌸</span>
      </div>
    </header>
  );
}
