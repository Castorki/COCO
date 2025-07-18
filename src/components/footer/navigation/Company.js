import React from 'react';
import { Link } from "react-router-dom";

export const Company = () => {
    return (
        <div className='footer__nav_company'>
            <h3 className='footer__nav_company_title'>Company</h3>
            <Link to={'/about'} className='footer__nav_company_link'>About</Link>
            <Link to={'/pricing'} className='footer__nav_company_link'>Pricing</Link>
            <Link to={'/jobs'} className='footer__nav_company_link'>Jobs</Link>
            <Link to={'/blog'} className='footer__nav_company_link'>Blog</Link>
        </div>
    )
}
