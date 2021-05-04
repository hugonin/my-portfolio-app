import React from "react";
import EntryCarousel from "../entry-carousel/entry-carousel.component";
import SLIDE_DATA from "./slide-data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./carousel.styles.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: SLIDE_DATA,
      currentIndex: 0,
    };
  }

  prevSlide = () => {
    const { slides, currentIndex } = this.state;
    if (currentIndex === 0) {
      return this.setState({ currentIndex: slides.length - 1 });
    }
    this.setState({ currentIndex: currentIndex - 1 });
  };

  nextSlide = () => {
    const { currentIndex, slides } = this.state;
    if (currentIndex === slides.length - 1) {
      return this.setState({ currentIndex: 0 });
    }
    this.setState({ currentIndex: currentIndex + 1 });
  };

  indexSlide = (info) => {
    const { id } = info;
    this.setState({ currentIndex: id - 1 });
  };

  render() {
    const { slides, currentIndex } = this.state;
    let isButtonHidden = {
      display: "block",
    };
    currentIndex === 0
      ? (isButtonHidden.display = "none")
      : (isButtonHidden.display = "block");

    return (
      <div className="carousel">
        <FaChevronLeft
          className="carousel__button carousel__button--left"
          style={isButtonHidden}
          onClick={this.prevSlide}
        />
        <div className="carousel__track-container">
          <ul className="carousel__track">
            <EntryCarousel
              key={slides[currentIndex].id}
              info={slides[currentIndex]}
            />
          </ul>
        </div>

        <div className="carousel__nav">
          {slides.map((item) => {
            let divStyle = {
              backgroundColor: "#f1f6f9",
            };
            if (currentIndex + 1 === +item.id) {
              divStyle.backgroundColor = "#9ba4b4";
            }
            return (
              <button
                className="carousel__indicator current-slide"
                key={item.id}
                style={divStyle}
                onClick={() => this.indexSlide(item)}
              ></button>
            );
          })}
        </div>

        <FaChevronRight
          className="carousel__button carousel__button--right"
          onClick={this.nextSlide}
        />
      </div>
    );
  }
}

export default Carousel;
