import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Home4 from './components/Home4';
import Home5 from './components/Home5';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const { deltaY } = event;
      if (deltaY > 0) {
        // Scroll down (move to the next section)
        setCurrentIndex((prev) => Math.min(prev + 1, 4)); // 4 = total sections - 1
      } else if (deltaY < 0) {
        // Scroll up (move to the previous section)
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className="App">
      <div
        className="sections-container"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        <Home />
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
        <Home5 />
      </div>
    </div>
  );
}

export default App;