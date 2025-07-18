import React from 'react'
import { Link } from "react-router-dom";

export const HelpCenter = () => {
    return (
        <div className='footer__nav_helpCenter'>
            <h3 className='footer__nav_helpCenter_title'>Help Center</h3>
            <Link to={'/about'} className='footer__nav_helpCenter_link'>Community</Link>
            <Link to={'/pricing'} className='footer__nav_helpCenter_link'>Knowledge Base</Link>
            <Link to={'/jobs'} className='footer__nav_helpCenter_link'>Academy</Link>
            <Link to={'/blog'} className='footer__nav_helpCenter_link'>Support</Link>
        </div>
    )
}
