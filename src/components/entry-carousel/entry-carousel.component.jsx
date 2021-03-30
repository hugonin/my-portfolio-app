import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

import './entry-carousel.styles.css';

const EntryCarousel = ({id, image, title, description,linkLive, linkCode}) =>(
    <div>
        <li className="carousel__slide">
            <img className="carousel__image" src={image} alt="" />
            <div className="carousel__slide-content ">
                <h3 className="carousel__slide-title">{title}</h3>
                <p className="carousel__slide-desc">{description}</p>
                <Router>
                    <Link className="btn" to={linkLive} >
                        See Live
                    </Link>
                    <Link className="secondary-btn" to={linkCode}>
                        Source Code
                    </Link>
                </Router>
            </div>
        </li>
    </div>
)

export default EntryCarousel