import React from 'react';
import { Link } from "react-router-dom";

export const FooterBottom = ({ theme }) => {

  if (theme === 'dark') {
    return (
      <div className='footer__bottom'>
        <div className='footer__bottom__socialMedia'>
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
      <p className='footer__bottom_copyright'>© Copyright 2023 All Rights Reserved</p>
    </div>
  )
}
