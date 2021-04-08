import React, { useState } from "react";
import EntryCarousel from "../entry-carousel/entry-carousel.component";
import carouselSlide from "../../carouselSlide";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./carousel.styles.css";



const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slideLength - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slideLength <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <FaChevronLeft className="carousel__button carousel__button--left is-hidden" onClick={prevSlide}  />
  
      <div className="carousel__track-container">
        <ul className="carousel__track">
          {carouselSlide.map((carouselItem) => (
            <EntryCarousel
              key={carouselItem.id}
              image={carouselItem.image}
              title={carouselItem.title}
              description={carouselItem.description}
              linkLive={carouselItem.linkLive}
              linkCode={carouselItem.linkCode}
            />
          ))}
        </ul>
      </div>
  
      <FaChevronRight className="carousel__button carousel__button--right" onClick={nextSlide}  />
  
      <div className="carousel__nav">
        <button className="carousel__indicator current-slide"></button>
        <button className="carousel__indicator"></button>
        <button className="carousel__indicator"></button>
      </div>
    </div>
  );

}

export default Carousel;
