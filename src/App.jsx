import React from 'react';
import FloatingHearts from './components/FloatingHearts';
import Greeting from './components/Greeting';
import PhotoCard from './components/PhotoCard';
import './App.css';

// Import local images
import momImage1 from './assets/mom.jpg';
import momImage2 from './assets/bcf02cd7-bc99-4027-9360-d78ac0f4ea9d.jpg';

import sisterImage1 from './assets/0f26b379-a019-4644-a996-d5feb0844f16.jpg'; // the newly uploaded birthday photo
import sisterImage2 from './assets/4f22c20d-16be-42ff-8a81-1c6eddd822f7.jpg';

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
          images={[momImage1, momImage2]}
        />
        
        <PhotoCard 
          title="Хөөрхөн Дүүдээ 🌷" 
          message={sisterMessage}
          isReversed={true}
          role="sister"
          images={[sisterImage1, sisterImage2]}
        />
      </div>
    </div>
  );
}

export default App;
