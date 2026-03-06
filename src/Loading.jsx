import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-grid">
        {[...Array(9)].map((_, index) => (
          <div 
            key={index} 
            className="loading-dot"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
      <div className="loading-text">ABUTECH</div>
    </div>
  );
};

export default Loading;