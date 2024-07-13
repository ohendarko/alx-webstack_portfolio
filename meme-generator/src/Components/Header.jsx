import React from 'react';
import Logo from '../assets/meme-Logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <img src={Logo} alt="meme-logo" className='logo' />
        <div className='bottom'>
          <NavLink to="/" className='header-text-left'>
            <h2>Meme Generator</h2>
          </NavLink>
        </div>


        <NavLink to="/about" className='header-text-right'>
          <small>Meet The Team</small>
        </NavLink>
        {/* <p className='header-text-right'><small>React Course - Project 3</small></p> */}
      </header>
    </div>
  )
}

export default Header;