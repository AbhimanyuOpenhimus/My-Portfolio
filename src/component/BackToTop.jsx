import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 
import './BackToTop.css'; 

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    // Show button if user scrolled more than 50% of the viewport height
    const scrollThreshold = window.innerHeight * 0.5; // 50% of viewport height

    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); 

  return (
    <div className="back-to-top-container">
      {isVisible && ( 
        <button
          onClick={scrollToTop}
          className="back-to-top-button"
          aria-label="Scroll to top" 
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;