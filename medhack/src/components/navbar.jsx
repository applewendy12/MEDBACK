import React from "react";
import { HumanDinosaur } from 'react-kawaii';
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <HumanDinosaur size={140} mood="happy" color="#A6E191" className="logo"/>
      <ul className="nav-links">
      <li><a href="././Eyetest">Eye Test</a></li>
        <li><a href="#eyeconditions">Eye Conditions</a></li>
        <li><a href="#treatments">Treatments</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;