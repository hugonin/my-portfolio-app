import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as LinkScroll } from "react-scroll";
import EntryService from '../../components/entry-service/entry-service.component';
import SERVICE_DATA from './service-data'

import './my-services.styles.css';

const MyServices = () => (
    <div>
        <section className="my-services" id="services" data-nav="Services" >
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
            {SERVICE_DATA.map((serviceItem) => (
            <EntryService
                key={serviceItem.id}
                title={serviceItem.title}
                content={serviceItem.content}
            />
            ))}              
            </div> 

            <Router>
                <LinkScroll className="btn" to="work">
                    See My Work
                </LinkScroll>
            </Router>
        </section>

    </div>
)

export default MyServices