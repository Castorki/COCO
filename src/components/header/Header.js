import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const Header = () => {

  const hiddenMenu = useRef(null);
  const menuIcon = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleToggleMenu = () => {
    if (!hiddenMenu.current) return;
  
    const isCurrentlyClosed = hiddenMenu.current.classList.contains('close');
  
    if (isCurrentlyClosed) {
      hiddenMenu.current.classList.remove('close');
      hiddenMenu.current.style.animation = 'fade-in 0.5s ease-in-out forwards';
    } 
    else {
      hiddenMenu.current.style.animation = 'fade-out 0.5s ease-in-out forwards';
  
      const onAnimationEnd = () => {
        hiddenMenu.current.classList.add('close');
        hiddenMenu.current.style.animation = '';
        hiddenMenu.current.removeEventListener('animationend', onAnimationEnd);
      };
  
      hiddenMenu.current.addEventListener('animationend', onAnimationEnd, { once: true });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={headerRef} className='header center'>
      <div className={`header__logo ${headerInView ? 'animated' : ''}`}>
        <img className='header__logo_imeg' src='logoLight.svg' alt='Site logo'></img>
        <h2 className='header__logo_title'>COCA</h2>
      </div>
      {windowWidth > 800 ? (
        <div className={`header__nav ${headerInView ? 'animated' : ''}`}>
          <Link to={'/'} className='header__nav_link'>Home</Link>
          <Link to={'/about'} className='header__nav_link'>About</Link>
          <Link to={'/blog'} className='header__nav_link'>Blog</Link>
          <Link to={'/pricing'} className='header__nav_link'>Pricing</Link>
          <Link to={'/contactUs'} className='header__nav_link'>Contact Us &rarr;</Link>
        </div>
      ) : (
        <div className={`header__nav ${headerInView ? 'animated' : ''}`}>
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
