import React from 'react';
import EntryCarousel from '../entry-carousel/entry-carousel.component';
import carouselSlide from '../../carouselSlide';
import ArrowLeft from '../../assets/left_arrow.svg';
import ArrowRight from '../../assets/right_arrow.svg';

import './carousel.styles.css';

const Carousel = () => (
    <div className="carousel">
         <button className="carousel__button carousel__button--left is-hidden">
            <img src={ArrowLeft} alt="" /> 
         </button>
    
            <div className="carousel__track-container"> 
                <ul className="carousel__track">
                {carouselSlide.map((carouselItem) =>
                <EntryCarousel
                    key={carouselItem.id}
                    image={carouselItem.image}
                    title={carouselItem.title}
                    description={carouselItem.description}
                    linkLive={carouselItem.linkLive}
                    linkCode={carouselItem.linkCode}
                 />
                )}                  
                </ul>
            </div>
    
            <button className="carousel__button carousel__button--right">
                <img src={ArrowRight} alt="" />               
            </button>
            
            <div className="carousel__nav">
                <button className="carousel__indicator current-slide"></button>
                <button className="carousel__indicator"></button>
                <button className="carousel__indicator"></button>
            </div>

    </div>
)

export default Carousel