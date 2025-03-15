import React, { useState } from 'react';
import './Home.css';
import home2Image from '../assets/home2.png'; // Import the image

const Home2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={home2Image} alt="Home 2" className="fullscreen-image" />
    </div>
  );
};

export default Home2;