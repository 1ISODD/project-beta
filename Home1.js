import React, { useState } from 'react';
import './Home.css';
import home1Image from '../assets/home1.png'; // Import the image

const Home1 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={home1Image} alt="Home 1" className="fullscreen-image" />
    </div>
  );
};

export default Home1;