import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import "./sidebar.styles.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <aside
        className="sidebar-container open"
        style={{ opacity: isOpen ? "100%" : "0",  top: isOpen ? "0%" : "-100%" }}  
        onClick={toggle}
      >
        <div className="sidebar-icon" onClick={toggle}>
          <FaTimes />
        </div>
        <div className="sidebar-wrapper">
          <div className="sidebar-menu">
            <Link className="sidebar-links" to="services" onClick={toggle}>
              My Services
            </Link>
            <Link className="sidebar-links" to="about" onClick={toggle}>
              About
            </Link>
            <Link className="sidebar-links" to="work" onClick={toggle}>
              My Work
            </Link>
            <Link className="sidebar-links" to="contact" onClick={toggle}>
              Contact
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
