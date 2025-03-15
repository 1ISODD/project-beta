import React, { useState } from 'react';
import './Home.css';
import home5Image from '../assets/home5.png'; // Import the image

const Home5 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={home5Image} alt="Home 5" className="fullscreen-image" />
    </div>
  );
};

export default Home5;