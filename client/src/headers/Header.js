import React, { useState, useEffect } from 'react';
import reactLogo from '../assets/react.png';

function Header() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText1 = 'ReactFacts';
  const fullText2 = 'React Course - Project 1';

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;

    const revealText = () => {
      if (index1 < fullText1.length) {
        setDisplayedText((prev) => prev + fullText1[index1]);
        index1++;
      }
    };

    const interval = setInterval(revealText, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <img src={reactLogo} alt="React Logo" className="image-size" />
      <h3>{displayedText}</h3>
    </nav>
  );
}

export default Header;
