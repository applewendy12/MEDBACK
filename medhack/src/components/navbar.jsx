import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
      <li><a href="#eyetest">Eye Test</a></li>
        <li><a href="#eyeconditions">Eye Conditions</a></li>
        <li><a href="#treatments">Treatments</a></li>
        <li><a href="#about">About</a></li>


      </ul>
    </nav>
  );
};

export default Navbar;