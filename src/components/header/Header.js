import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';



export const Header = () => {

  const hiddenMenu = useRef(null);
  const menuIcon = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggleMenu = () => {
    if (hiddenMenu.current) {
      hiddenMenu.current.classList.toggle('close');
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='header center'>
      <div className='header__logo'>
        <img className='header__logo_imeg' src='logoLight.svg' alt='Site logo'></img>
        <h2 className='header__logo_title'>COCA</h2>
      </div>
      {windowWidth > 800 ? (
        <div className='header__nav'>
          <Link to={'/'} className='header__nav_link'>Home</Link>
          <Link to={'/about'} className='header__nav_link'>About</Link>
          <Link to={'/blog'} className='header__nav_link'>Blog</Link>
          <Link to={'/pricing'} className='header__nav_link'>Pricing</Link>
          <Link to={'/contactUs'} className='header__nav_link'>Contact Us &rarr;</Link>
        </div>
      ) : (
        <div className='header__nav'>
          <img ref={menuIcon} className='header__nav_menu' src='mobileHeaderMenu.svg' alt='' onClick={handleToggleMenu}></img>
          <div ref={hiddenMenu} className='header__nav_hiddenWrapper close'>
            <Link to={'/'} className='header__nav_link'>Home</Link>
            <Link to={'/about'} className='header__nav_link'>About</Link>
            <Link to={'/blog'} className='header__nav_link'>Blog</Link>
            <Link to={'/pricing'} className='header__nav_link'>Pricing</Link>
            <Link to={'/contactUs'} className='header__nav_link'>Contact Us &rarr;</Link>
          </div>
        </div>
      )}
    </div>
  )
}
