import React from "react";
import EntryCarousel from "../entry-carousel/entry-carousel.component";
import carouselSlideData from "../../carouselSlideData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./carousel.styles.css";


class Carousel extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        carouselSlideData,
        currentIndex: 0
      };
    }

    prevSlide = () => {
      const { carouselSlideData, currentIndex } = this.state;
      if (currentIndex === 0) {
        return this.setState({ currentIndex: carouselSlideData.length - 1 });
      }
      this.setState({ currentIndex: currentIndex - 1 });
    };
  
    nextSlide = () => {
      const { currentIndex, carouselSlideData } = this.state;
      if (currentIndex === carouselSlideData.length - 1) {
        return this.setState({ currentIndex: 0 });
      }
      this.setState({ currentIndex: currentIndex + 1 });
    };
  
    indexSlide = info => {
      const { id } = info;
      this.setState({ currentIndex: id - 1 });
    };

    render() {
      const { carouselSlideData, currentIndex } = this.state;
      return (
        <div className="carousel">
          <FaChevronLeft className="carousel__button carousel__button--left is-hidden" onClick={this.prevSlide}  />
          <div className="carousel__track-container">
            <ul className="carousel__track">
              <EntryCarousel key={carouselSlideData[currentIndex].id} info={carouselSlideData[currentIndex]} />
            </ul>
          </div>
         
          <div className="carousel__nav">
            {carouselSlideData.map(item => {
              let bgColor = "##9ba4b4";
              if (currentIndex + 1 === +item.id) {
                bgColor = "#f1f6f9";
                
              }
              return (
                <button 
                  className="carousel__indicator current-slide"
                  key={item.id}
                  bgColor={bgColor}
                  onClick={() => this.indexSlide(item)}>
                </button>
              );
            })}
          </div>
         
            
          <FaChevronRight className="carousel__button carousel__button--right" onClick={this.nextSlide}  />
     
        </div>
   
          
      
      );

    }

}

export default Carousel