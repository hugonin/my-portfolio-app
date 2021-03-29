import React from 'react';
import Carousel  from '../../components/carousel/carousel.component'

import './my-work.styles.css'

const MyWork = () => (
    <div>
        <section className="my-work" id="work" data-nav="Work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p> 
            <Carousel />
        </section>
    </div>
)

export default MyWork