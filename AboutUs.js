import React from 'react';

const AboutUs = () => {
  return (
    <section className="About-us" id="About-us">
      <h2 id="HeadingAbout">About Us</h2>
      <div id="about-us">
        <div id="our-hero" className="our-hero">
          <h2>Who We Are <i className="fa-solid fa-user"></i></h2>
          <p>Dedicated to delivering excellence in every project.</p>
        </div>

        <div id="our-mission" className="our-mission">
          <h2>Our Mission <i className="fa-solid fa-rocket"></i></h2>
          <p>To empower businesses with innovative and scalable solutions that drive growth and success.</p>
        </div>

        <div id="our-values" className="our-values">
          <h2>Our Values <i className="fa-solid fa-wand-magic-sparkles"></i></h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
