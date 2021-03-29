import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


import { ReactComponent as MenuButton } from '../../assets/menu.svg';
import { ReactComponent as ExitButton } from '../../assets/exit.svg'

import './header.styles.css'

const Header = () => (
    <div className="header">
    <Router>
        <Link className="logo" to="/">
            My Company
        </Link>
            <MenuButton id="menu-btn" className="open" />
        <nav id="nav">
            <ExitButton id="exit" className="exit"/>
            <ul className="nav__list">
                <li className="nav__item" data-link="home">
                    <Link className="nav__link" to="/home">
                        Home
                    </Link>
                </li>
                <li className="nav__item" data-link="services">
                    <Link className="nav__link" to="/services">
                        My Services
                    </Link>               
                </li>
                <li className="nav__item" data-link="about">
                    <Link className="nav__link" to="/about">
                        About
                    </Link>
                </li>
                <li className="nav__item" data-link="work">
                    <Link className="nav__link" to="/work">
                        My Work
                    </Link>
                </li>
                <li className="nav__item" data-link="contact">
                    <Link className="nav__link" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

    </Router>     
    </div>
);

export default Header;