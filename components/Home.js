import React, { useState } from 'react';
import './Home.css';
import homeImage from '../assets/home.png'; // Import the image

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={homeImage} alt="Home" className="fullscreen-image" />
    </div>
  );
};

export default Home;