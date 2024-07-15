import React from 'react';
import { NavLink } from 'react-router-dom';
import Prince from '../assets/Prince.png';
import Kwadwo from '../assets/Kwadwo.png';
import Ayanda from '../assets/Ayanda.png';
import Kwame from '../assets/Kwame.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <ul className="social-media-links scroll">
        Contributors:
        <NavLink to="/about#Prince" className='header-text-left'>
          <img src={Prince} alt="Dr. Appiagyei" className="foot-pic" />
        </NavLink>
        <NavLink to="/about#Kwadwo" className='header-text-left'>
          <img src={Kwadwo} alt="Dr.Ohene" className="foot-pic" />
        </NavLink>
        <NavLink to="/about#Kwame" className='header-text-left'>
          <img src={Kwame} alt="Kwame" className="foot-pic" />
        </NavLink>
        <NavLink to="/about#Ayanda" className='header-text-left'>
          <img src={Ayanda} alt="Ayanda" className="foot-pic" />
        </NavLink>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;

