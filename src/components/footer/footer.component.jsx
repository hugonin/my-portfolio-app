import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import './footer.styles.css';

const Footer = () => (
    <div>
        <footer className="footer">
            <div className="footer-main">
                <h3>My Company</h3>
                <p className="footer-fineprint"></p>
            </div>
            <ul className="social-list">
            <Router>
                <li className="social-list__item">
                    <Link to="https://linkedin.com" className="social-list__link"></Link>
                    <FontAwesomeIcon icon="linkedin" />
                    
                </li>
                <li className="social-list__item">
                    <Link to="https://twitter.com" className="social-list__link"></Link>
                    <FontAwesomeIcon icon={['fab','twitter']} />
                </li>
                <li className="social-list__item">
                    <Link to="https://github.com" className="social-list__link"></Link>
                    <FontAwesomeIcon icon={['fab','github']} />
                </li>
            </Router>        
            </ul>
    
        </footer>
    </div>
)

export default Footer