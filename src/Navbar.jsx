// Navbar.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu from "./images/menu.png";
import menu_white from "./images/menu-white.png";
import menu_dark from './images/menu-dark.png';

const Navbar = ({ defaultSticky }) => {
  useEffect(() => {
    if (!defaultSticky) {
      const handleScroll = () => {
        const nav = document.querySelector(".navbar");
        nav.classList.toggle("sticky", window.scrollY > 150);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [defaultSticky]);

  return (
    <nav className={`navbar ${defaultSticky ? "sticky" : ""}`}>
      <Link to="/" className="navbar-brand">Trip Tips</Link>
      <div className="navlist">
        <ul>
          <li className="navitem">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <a><li className="navitem">Blog</li></a>
          <a><li className="navitem">Explore</li></a>
          <a><li className="navitem">Gallery</li></a>
          <img className="menu-dark" src={menu_dark} alt="" />
          <img className="menu-white" src={menu_white} alt="" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
