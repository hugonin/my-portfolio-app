import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import "./navbar.styles.css";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav
        className="navbar"
        scrollnav={scrollNav}
        style={{ background: scrollNav ? "#f1f6f9" : "transparent" }}
      >
        <div className="navbar-container">
          <LinkRouter className="navbar-logo" to="/" onClick={toggleHome}>
            My Company
          </LinkRouter>
          <div className="menu-icon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <LinkScroll
                className="nav-links"
                to="services"
                smooth={true}
                duration={250}
                spy={true}
                exact="true"
                offset={-80}
              >
                My Services
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll
                className="nav-links"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll
                className="nav-links"
                to="work"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                My Work
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll
                className="nav-links"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </LinkScroll>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
