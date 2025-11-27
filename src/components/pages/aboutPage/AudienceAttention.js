import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const AudienceAttention = () => {

    const {ref: audienceRef, inView: audienceInView} = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    return (
        <div ref={audienceRef} className='audienceAttention center'>
            <h2 className={`audienceAttention__header ${audienceInView ? 'animated' : ''}`}>Everything you need to get the attention of your audience</h2>
            <p className={`audienceAttention__article ${audienceInView ? 'animated' : ''}`}>
                Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.
            </p>
            <Link to={'/contactUs'} className={`audienceAttention__link ${audienceInView ? 'animated' : ''}`}>
                <img className='audienceAttention__link_icon' src='linkToContacts.svg' alt='Link to our contacts'></img>
            </Link>
        </div>
    )
}
