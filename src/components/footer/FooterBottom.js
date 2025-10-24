import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export const FooterBottom = ({ theme }) => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  if (theme === 'dark') {
    return (
      <div className='footer__bottom dark'>
        <div className='footer__bottom_socialMedia'>
          <Link to={'/facebook'}><img src='facebook.svg' alt='facebook link'></img></Link>
          <Link to={'/tweeter'}><img src='tweeter.svg' alt='tweeter link'></img></Link>
          <Link to={'/instagram'}><img src='instagram.svg' alt='instagram link'></img></Link>
          <Link to={'/linkedIn'}><img src='linkedIn.svg' alt='linkedIn link'></img></Link>
        </div>
        <div className='footer__bottom_legal'>
          <Link className='footer__bottom_legal_link' to={'/privacy'}>Privacy Policy</Link>
          <Link className='footer__bottom_legal_link' to={'/terms&conditions'}>Terms & Conditions</Link>
          <Link className='footer__bottom_legal_link' to={'/support'}>Support</Link>
        </div>
        <p className='footer__bottom_copyright'>© Copyright 2023 All Rights Reserved</p>
      </div >
    )
  }

  return (
    <div className='footer__bottom'>
      {windowWidth > 600 ? (
        <p className='footer__bottom_copyright'>© Copyright 2023 All Rights Reserved</p>
      ) : (
        <>
          <div className='footer__bottom_socialMedia'>
            <Link to={'/facebook'}><img src='facebookBlack.svg' alt='facebook link'></img></Link>
            <Link to={'/tweeter'}><img src='tweeterBlack.svg' alt='tweeter link'></img></Link>
            <Link to={'/instagram'}><img src='instagramBlack.svg' alt='instagram link'></img></Link>
            <Link to={'/linkedIn'}><img src='linkedInBlack.svg' alt='linkedIn link'></img></Link>
          </div>
          <div className='footer__bottom_legal'>
            <Link className='footer__bottom_link' to={'/privacy'}>Privacy Policy</Link>
            <Link className='footer__bottom_link' to={'/terms&conditions'}>Terms & Conditions</Link>
            <Link className='footer__bottom_link' to={'/support'}>Support</Link>
          </div>
          <p className='footer__bottom_copyright'>© Copyright 2023 All Rights Reserved</p>
        </>
      )}
    </div>
  )
}
