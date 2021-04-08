import React from 'react';
import AboutImage  from '../../assets/dev-jean-02.jpg'

import './about.styles.css';

const About = () => (
    <div>
         <section className="about-me" id="about" data-nav="About">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Designer & developer based in Lyon</p>

            <div className="about-me__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <img src={AboutImage} alt={AboutImage} className="about-me__img" />

    </section>
    </div>
)

export default About