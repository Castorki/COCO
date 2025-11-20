import React from 'react'
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

export const Discover = () => {

    const { ref: footerNavRef, inView: footerNavInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={footerNavRef} className='footer__nav_discover'>
            <h3 className={`footer__nav_title discover ${footerNavInView ? 'animated' : ''}`}>Discover</h3>
            <Link to={'/about'} className={`footer__nav_link discover ${footerNavInView ? 'animated' : ''}`}>CRM Comparision</Link>
            <Link to={'/pricing'} className={`footer__nav_link discover ${footerNavInView ? 'animated' : ''}`}>Partner Program</Link>
            <Link to={'/jobs'} className={`footer__nav_link discover ${footerNavInView ? 'animated' : ''}`}>What is CRM</Link>
            <Link to={'/blog'} className={`footer__nav_link discover ${footerNavInView ? 'animated' : ''}`}>Resource</Link>
        </div>
    )
}
