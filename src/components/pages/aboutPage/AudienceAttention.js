import React from 'react';
import { Link } from 'react-router-dom';

export const AudienceAttention = () => {
    return (
        <div className='audienceAttention center'>
            <h2 className='audienceAttention__header'>Everything you need to get the attention of your audience</h2>
            <p className='audienceAttention__article'>
                Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.
            </p>
            <Link to={'/contactUs'} className='audienceAttention__link'>
                <img className='audienceAttention__link_icon' src='linkToContacts.svg' alt='Link to our contacts'></img>
            </Link>
        </div>
    )
}
