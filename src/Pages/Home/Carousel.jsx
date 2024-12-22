import React, { useState } from 'react';
import './Carousel.css';

const images = [
'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/134287/city-exterior-right-side-view.jpeg?isig=0&q=80&q=80',
'https://i.cdn.newsbytesapp.com/images/l200_16341627558554.jpg',
'https://5.imimg.com/data5/SELLER/Default/2023/7/328672835/VA/KQ/HE/74275602/tour-and-travels.jpeg',
'https://www.pngitem.com/pimgs/m/133-1332498_tours-travels-tavera-car-hd-png-download.png',

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      {/* Images */}
      <div className="carousel-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? 'active' : 'inactive'
            }`}
          >
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-img" />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        className="carousel-button left"
        onClick={previousImage}
        aria-label="Previous Image"
      >
        ◀
      </button>

      {/* Right Button */}
      <button
        className="carousel-button right"
        onClick={nextImage}
        aria-label="Next Image"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
