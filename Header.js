import React from 'react';
import './Logo.png';


const Header = () => {
  return (
    <header>
      <div className="logo" id="logo-image">
        <img src="Logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#About-us">About Us</a></li>
          <li><a href="#team">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
