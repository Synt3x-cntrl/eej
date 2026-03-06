import React from 'react';
import './PhotoCard.css';

export default function PhotoCard({ title, message, images, isReversed, role }) {
  return (
    <div className={`photo-card-container ${isReversed ? 'reversed' : ''}`}>
      <div className="image-section">
        <div className={`image-gallery ${images && images.length > 1 ? 'multi-image' : ''}`}>
          {images && images.length > 0 ? (
            images.map((imgSrc, index) => (
              <div key={index} className="image-placeholder">
                <img src={imgSrc} alt={`${title} ${index + 1}`} className="card-image" />
              </div>
            ))
          ) : (
            <div className="image-placeholder">
              <span className="placeholder-text">
                {role === 'mom' ? 'Ээжийнхээ зургийг' : 'Дүүгийнхээ зургийг'}<br />
                энд оруулаарай
              </span>
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-section">
        <h2>{title}</h2>
        <div className="decorative-line"></div>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}
