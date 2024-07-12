import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="team">
        <div className="member">
          <img className="pic" src="/path/to/your/image.jpg" alt="Team Member" />
          <div className="text">
            <h3>Team Member Name</h3>
            <h5>Position</h5>
            <p>Some description about the team member.</p>
          </div>
        </div>
        {/* Add more members as needed */}
      </div>
    </div>
  );
};

export default AboutUs;
