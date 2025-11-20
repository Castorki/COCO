import React from 'react'
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

export const Product = () => {

    const { ref: footerNavRef, inView: footerNavInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={footerNavRef} className='footer__nav_product'>
            <h3 className={`footer__nav_title product ${footerNavInView ? 'animated' : ''}`}>Product</h3>
            <Link to={'/about'} className={`footer__nav_link product ${footerNavInView ? 'animated' : ''}`}>Sales Software</Link>
            <Link to={'/pricing'} className={`footer__nav_link product ${footerNavInView ? 'animated' : ''}`}>Marketplace</Link>
            <Link to={'/jobs'} className={`footer__nav_link product ${footerNavInView ? 'animated' : ''}`}>Terms & Conditions</Link>
            <Link to={'/blog'} className={`footer__nav_link product ${footerNavInView ? 'animated' : ''}`}>Privacy Policy</Link>
        </div>
    )
}
