import React from 'react'
import { Link } from "react-router-dom";

export const Discover = () => {
    return (
        <div className='footer__nav_discover'>
            <h3 className='footer__nav_title discover'>Discover</h3>
            <Link to={'/about'} className='footer__nav_link discover'>CRM Comparision</Link>
            <Link to={'/pricing'} className='footer__nav_link discover'>Partner Program</Link>
            <Link to={'/jobs'} className='footer__nav_link discover'>What is CRM</Link>
            <Link to={'/blog'} className='footer__nav_link discover'>Resource</Link>
        </div>
    )
}
