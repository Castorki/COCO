import React from 'react'
import { Link } from 'react-router-dom';



export const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img className='header__logo_imeg' src='logo.svg' alt='Site logo'></img>
        <h2 className='header__logo_title'>COCA</h2>
      </div>
      <div className='header__nav'>
        <Link to={'/'} className='header__nav_link'>Home</Link>
        <Link to={'/about'} className='header__nav_link'>About</Link>
        <Link to={'/blog'} className='header__nav_link'>Blog</Link>
        <Link to={'/pricing'} className='header__nav_link'>Pricing</Link>
        <Link to={'/contactUs'} className='header__nav_link'>Contact Us &rarr;</Link>
      </div>
    </div>
  )
}
