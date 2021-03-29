import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import linkedinIcon from '../../assets/linkedin.svg';
import twitterIcon from '../../assets/twitter.svg';
import githubIcon from '../../assets/github.svg';

import './footer.styles.css';

const Footer = () => (
    <div>
        <footer className="footer">
    <div class="footer-main">
        <h3>My Company</h3>
        <p className="footer-fineprint"></p>
    </div>
    <Router>
        <ul className="social-list">
            <li className="social-list__item">
                <Link to="https://codepen.io" className="social-list__link"></Link>
                <img src={linkedinIcon} alt="linkedinIcon"  />
            </li>
            <li className="social-list__item">
                <Link to="https://twitter.com" className="social-list__link"></Link>
                <img src={twitterIcon} alt="twitterIcon"  />
            </li>
            <li className="social-list__item">
                <Link to="https://github.com" className="social-list__link"></Link>
                <img src={githubIcon} alt= "githubIcon" />
            </li>        
        </ul>
    </Router>    
</footer>
    </div>
)

export default Footer