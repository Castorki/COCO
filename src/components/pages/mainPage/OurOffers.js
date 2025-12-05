import React from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';


export const OurOffers = () => {

    const offers = useSelector(state => state.offers);

    const { ref: offersRef, inView: offersInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div ref={offersRef} className={`ourOffers  center`} >
            <h2 className={`ourOffers__title ${offersInView ? "animated" : ''}`}>
                Coca help our client solve complex customer problems with date that does more.
            </h2>
            <p className={`ourOffers__article ${offersInView ? "animated" : ''}`}>
                Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration
            </p>
            <div className='ourOffers__list'>
                {offers.map((offer, index) => (
                    < div key={offer.id} className={`ourOffers__list_listElement ${offersInView ? "animated" : ''}`}
                        style={{
                            '--delay': `${(index + 1.5) * 0.4}s`
                        }}>
                        <img className='ourOffers__listElement_icon' src={offer.img} alt=''></img>
                        <h3 className='ourOffers__listElement_title'>
                            {offer.title}
                        </h3>
                        <p className='ourOffers__listElement_article'>
                            {offer.article}
                        </p>
                    </div>
                ))}
            </div>
        </div >
    )
}
