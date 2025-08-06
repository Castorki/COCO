import React from 'react'
import { Link } from "react-router-dom";

export const HelpCenter = () => {
    return (
        <div className='footer__nav_helpCenter'>
            <h3 className='footer__nav_title helpCenter'>Help Center</h3>
            <Link to={'/about'} className='footer__nav_link helpCenter'>Community</Link>
            <Link to={'/pricing'} className='footer__nav_link helpCenter'>Knowledge Base</Link>
            <Link to={'/jobs'} className='footer__nav_link helpCenter'>Academy</Link>
            <Link to={'/blog'} className='footer__nav_link helpCenter'>Support</Link>
        </div>
    )
}
