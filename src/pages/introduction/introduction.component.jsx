import React from 'react'
import introImage from '../../assets/dev-jean-01.jpg';

import './introduction.styles.css'

const Introduction = () => (
    <div>
        <section className="intro" id="home"  data-nav="Home">
            <div className="intro__body">
                <h1 className="section__title section__title--intro">
                    Hello, I'm <strong>Jean DOE</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">front-end dev</p>         
            </div>
            <div><img src={introImage} alt="IntroImage" className="intro__img" /></div>
           
        </section>
    </div>

)

export default Introduction;