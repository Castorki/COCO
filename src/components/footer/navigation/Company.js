import React from 'react';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

export const Company = () => {

    const { ref: footerNavRef, inView: footerNavInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={footerNavRef} className={`footer__nav_company ${footerNavInView ? 'animated' : ''}`}>
            <h3 className={`footer__nav_title company ${footerNavInView ? 'animated' : ''}`}>Company</h3>
            <Link to={'/about'} className={`footer__nav_link company ${footerNavInView ? 'animated' : ''}`}>About</Link>
            <Link to={'/pricing'} className={`footer__nav_link company ${footerNavInView ? 'animated' : ''}`}>Pricing</Link>
            <Link to={'/jobs'} className={`footer__nav_link company ${footerNavInView ? 'animated' : ''}`}>Jobs</Link>
            <Link to={'/blog'} className={`footer__nav_link company ${footerNavInView ? 'animated' : ''}`}>Blog</Link>
        </div>
    )
}
