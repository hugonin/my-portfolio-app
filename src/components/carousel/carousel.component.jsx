import React from 'react';

import './carousel.styles.css';

const Carousel = () => (
    <div>
         <button class="carousel__button carousel__button--left is-hidden">
              
            </button>
    
            <div class="carousel__track-container"> 
                <ul class="carousel__track">
                    <li class="carousel__slide current-slide">
                        <div class="carousel__slide-content ">
                            <h3 class="carousel__slide-title">Hacker News Clone</h3>
                            <p class="carousel__slide-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <a href="portfolio-item.html" class="btn">See Live</a><a href="portfolio-item.html" class="secondary-btn">Source Code</a>
                        </div>
                    </li>
                    
                </ul>
            </div>
    
            <button class="carousel__button carousel__button--right">
                
            </button>
            
            <div class="carousel__nav">
                <button class="carousel__indicator current-slide"></button>
                <button class="carousel__indicator"></button>
                <button class="carousel__indicator"></button>
            </div>

    </div>
)

export default Carousel