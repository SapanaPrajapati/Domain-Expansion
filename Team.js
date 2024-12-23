import React from 'react';

const Team = () => {
  return (
    <section id="team" className="our-team">
      <h1 className="HeadingTeam">Our Team</h1>
      <p className="ParaTeam">Our talented professionals make it all possible.</p>

      <div className="team-members">
        <div className="team-member">
          <i className="fa-solid fa-user"></i>
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <i className="fa-solid fa-user"></i>
          <h3>Jane Smith</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <i className="fa-solid fa-user"></i>
          <h3>Mike Johnson</h3>
          <p>Designer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
