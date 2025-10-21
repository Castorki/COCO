import React from 'react';
import { useSelector } from 'react-redux';


export const OurOffers = () => {

    const offers = useSelector(state => state.offers)

    return (
        <div className='ourOffers center'>
            <h2 className='ourOffers__title'>
                Coca help our client solve complex customer problems with date that does more.
            </h2>
            <p className='ourOffers__article'>
                Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration
            </p>
            <div className='ourOffers__list'>
                {offers.map(offer => (
                    < div key={offer.id} className='ourOffers__list_listElement' >
                        <img className='ourOffers__list_listElement_icon' src={offer.img} alt=''></img>
                        <h3 className='ourOffers__list_listElement_title'>
                            {offer.title}
                        </h3>
                        <p className='ourOffers__list_listElement_article'>
                            {offer.article}
                        </p>
                    </div>
                ))}
            </div>
        </div >
    )
}
