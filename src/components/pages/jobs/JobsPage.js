import React from 'react';
import './JobsStyle.css'
import { Link } from 'react-router-dom';

export const JobsPage = () => {
    return (
        <div className='jobs center'>
            <h1 className='jobs__title'>Sorry, but this page temporarily are not available.</h1>
            <Link to={'/'} className='jobs__link'>Home</Link>
        </div>
    )
}
