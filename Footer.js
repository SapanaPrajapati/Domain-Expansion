import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <p align="center">&copy; 2024 || domainexpansion </p>
      <ul>
        <li><a href="#privacy-policy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#contact-info">Contact Information</a></li>
      </ul>
      <div className="social-icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
    </footer>
  );
};

export default Footer;
