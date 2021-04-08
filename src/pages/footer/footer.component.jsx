import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaCopyright, FaHeart } from "react-icons/fa";

import './footer.styles.css';

const Footer = () => (
    <div>
        <footer className="footer">
            <div className="footer-main">
                <h3>My Company</h3>
                <p className="footer-fineprint"><FaCopyright /> 2021 | Made with <FaHeart color="red" /> by Hugonin </p>
            </div>
            <ul className="social-list">
            <Router>
                <li className="social-list__item">
                    <Link to="https://linkedin.com" className="social-list__link">
                        <FaLinkedin />
                    </Link>    
                </li>
                <li className="social-list__item">
                    <Link to="https://twitter.com" className="social-list__link">
                        <FaTwitter />
                    </Link>         
                </li>
                <li className="social-list__item">
                    <Link to="https://github.com" className="social-list__link">
                        <FaGithub />
                    </Link>                 
                </li>
            </Router>        
            </ul>
    
        </footer>
    </div>
)

export default Footer