import React from 'react';
import './style.css';

function About() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
        </ul>
      </nav>
      <section className="about-us">
        <h2>About Us</h2>
        <div className="team">
          <div className="member">
            <img src="assets/Prince.jpg" alt="Dr. Appiagyei Osei" className="pic" />
            <div className="text">
              <h3>Dr. Appiagyei Osei</h3>
              <h5>Front-end Engineer</h5>
              <p>Brief bio or description of Dr. Appiagyei Osei's role and contributions.</p>
            </div>
          </div>
          <div className="member">
            <img src="assets/Kwame.jpg" alt="Kwame Adobaw" className="pic" />
            <div className="text">
              <h3>Kwame Adobaw</h3>
              <h5>Back-end Engineer</h5>
              <p>Brief bio or description of Kwame Adobaw's role and contributions.</p>
            </div>
          </div>
          <div className="member">
            <img src="assets/Kwadwo.jpg" alt="Kwadwo Darko" className="pic" />
            <div className="text">
              <h3>Kwadwo Darko</h3>
              <h5>Front-end Engineer/REACT Specialist</h5>
              <p>Brief bio or description of Kwadwo Darko's role and contributions.</p>
            </div>
          </div>
          <div className="member">
            <img src="assets/Ayanda.jpg" alt="Ayanda Ngubane" className="pic" />
            <div className="text">
              <h3>Ayanda Ngubane</h3>
              <h5>Project Manager</h5>
              <p>Brief bio or description of Ayanda Ngubane's role and contributions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
