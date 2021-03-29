import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './my-service.styles.css';

const MyService = ({id, title, content}) => (
    <div>
        <section className="my-services" id="services" data-nav="Services" >
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <h3>{title}</h3>
                <p>{content}</p>            
            </div> 

            <Router>
                <Link className="btn" to="/work">
                    See My Work
                </Link>
            </Router>
        </section>

    </div>
)

export default MyService;