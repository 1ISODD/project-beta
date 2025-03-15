import React, { useState } from 'react';
import './Home.css';
import home3Image from '../assets/home3.png'; // Import the image

const Home3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={home3Image} alt="Home 3" className="fullscreen-image" />
    </div>
  );
};

export default Home3;