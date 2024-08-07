import "./Carousel.scss"
import React, { useState } from 'react';

export default function Carousel({ pictureArray }) {
  const [index, setIndex] = useState(0);
  const length = pictureArray.length;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <svg className="carousel-svg_left" onClick={handlePrevious} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
      </svg>
      <img  src={pictureArray[index]} className="carousel-img" alt="logement" />
      <svg className="carousel-svg_right" onClick={handleNext} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
      </svg>
    </div>
  );
};