import React, { useState } from 'react';
import './Home.css';
import home4Image from '../assets/home4.png'; // Import the image

const Home4 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={home4Image} alt="Home 4" className="fullscreen-image" />
    </div>
  );
};

export default Home4;