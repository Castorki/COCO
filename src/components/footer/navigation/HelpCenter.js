import React from 'react'
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

export const HelpCenter = () => {
    const { ref: footerNavRef, inView: footerNavInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={footerNavRef} className='footer__nav_helpCenter'>
            <h3 className={`footer__nav_title helpCenter ${footerNavInView ? 'animated' : ''}`}>Help Center</h3>
            <Link to={'/about'} className={`footer__nav_link helpCenter ${footerNavInView ? 'animated' : ''}`}>Community</Link>
            <Link to={'/pricing'} className={`footer__nav_link helpCenter ${footerNavInView ? 'animated' : ''}`}>Knowledge Base</Link>
            <Link to={'/jobs'} className={`footer__nav_link helpCenter ${footerNavInView ? 'animated' : ''}`}>Academy</Link>
            <Link to={'/blog'} className={`footer__nav_link helpCenter ${footerNavInView ? 'animated' : ''}`}>Support</Link>
        </div>
    )
}
