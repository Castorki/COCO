import React from 'react'
import { Link } from "react-router-dom";

export const Product = () => {
    return (
        <div className='footer__nav_product'>
            <h3 className='footer__nav_title product'>Product</h3>
            <Link to={'/about'} className='footer__nav_link product'>Sales Software</Link>
            <Link to={'/pricing'} className='footer__nav_link product'>Marketplace</Link>
            <Link to={'/jobs'} className='footer__nav_link product'>Terms & Conditions</Link>
            <Link to={'/blog'} className='footer__nav_link product'>Privacy Policy</Link>
        </div>
    )
}
