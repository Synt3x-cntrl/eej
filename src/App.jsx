import React from 'react';
import FloatingHearts from './components/FloatingHearts';
import Greeting from './components/Greeting';
import PhotoCard from './components/PhotoCard';
import './App.css';

// Import local images
import momImage from './assets/mom.jpg';
import familyImage from './assets/family.jpg';

function App() {
  const momMessage = `Хайрт ээждээ Олон улсын эмэгтэйчүүдийн өдрийн гал халуун мэндийг хүргэе! Та минь үргэлж инээмсэглэж, эрүүл энх, аз жаргалаар дүүрэн байхыг хүсье. Та бол миний амьдралын хамгийн сайхан бэлэг. Би танд маш их хайртай шүү!`;
  
  const sisterMessage = `Хөөрхөн дүүдээ Мартын 8-ны баярын мэнд хүргэе! Үргэлж өнөөдрийнх шигээ гэрэлтэж, мөрөөдөл чинь биелж, үргэлж аз жаргалтай яваарай. 3 ах нь чамдаа зөндөө хайртай шүү!`;

  return (
    <div className="app-container">
      <FloatingHearts />
      
      <div className="content-wrapper">
        <Greeting />
        
        <PhotoCard 
          title="Хайрт Ээждээ 🌺" 
          message={momMessage}
          isReversed={false}
          role="mom"
          image={momImage}
        />
        
        <PhotoCard 
          title="Хөөрхөн Дүүдээ 🌷" 
          message={sisterMessage}
          isReversed={true}
          role="sister"
          image={familyImage}
        />
      </div>
    </div>
  );
}

export default App;
