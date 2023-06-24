import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = (e) => {
    if (currentSlide - 1 == 0) {
      setCurrentSlide(currentSlide - 1);
    } else setCurrentSlide(images.length - 1);
  };

  const nextSlide = (e) => {
    if (currentSlide + 1 != images.length) {
      setCurrentSlide(currentSlide + 1);
    } else setCurrentSlide(0);
  };

  const controlClick = (target) => {
    setCurrentSlide(target);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, i) => (
          <div
            key={i}
            style={{ transform: `translate(-${currentSlide * 100}%)` }}
            className={`carousel-card`}
          >
            <img className="carousel-image" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="carousel-prev" onClick={prevSlide}>
        Prev
      </div>
      <div className="carousel-next" onClick={nextSlide}>
        Next
      </div>
      <div className="carousel-controls">
        {images.map((img, i) => (
          <div className="carousel-dots" onClick={() => controlClick(i)}></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
