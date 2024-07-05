import React from 'react';
import Logo from '../assets/meme-Logo.png';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <img src={Logo} alt="meme-logo" className='logo' />
        <h2 className='header-text-left'>Meme Generator</h2>
        {/* <p className='header-text-right'><small>React Course - Project 3</small></p> */}
      </header>
    </div>
  )
}

export default Header