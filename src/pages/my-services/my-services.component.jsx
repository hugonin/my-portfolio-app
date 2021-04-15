import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                <Link className="btn" to="/work">
                    See My Work
                </Link>
            </Router>
        </section>

    </div>
)

export default MyServices