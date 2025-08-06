import React from 'react';
import { Link } from "react-router-dom";

export const Company = () => {
    return (
        <div className='footer__nav_company'>
            <h3 className='footer__nav_title company'>Company</h3>
            <Link to={'/about'} className='footer__nav_link company'>About</Link>
            <Link to={'/pricing'} className='footer__nav_link company'>Pricing</Link>
            <Link to={'/jobs'} className='footer__nav_link company'>Jobs</Link>
            <Link to={'/blog'} className='footer__nav_link company'>Blog</Link>
        </div>
    )
}
