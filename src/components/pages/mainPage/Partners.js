import React from 'react'
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';


export const Partners = ({ showBorder }) => {

    const partners = useSelector(state => state.partners);

    const { ref: partnersRef, inView: partnersInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        <div ref={partnersRef} className={`partners ${showBorder ? 'showBorder' : ''} center`}>
            <div className='partners__info'>
                <h2 className={`partners__info_title ${partnersInView ? 'animated' : ''}`}>890+</h2>
                <p className={`partners__info_article ${partnersInView ? 'animated' : ''}`} style={{
                    '--delay': `${partners.length / 2}s`
                }}>
                    some big companies that we work with, and trust us very much
                </p>
            </div>
            <div className='partners__logos'>
                {partners.map((item, index) => (

                    <img key={item.id} className={`partners__logos_logo ${partnersInView ? 'animated' : ''}`} src={item.logo} alt={item.alt} style={{
                        '--delay': `${(index + 1.5) * 0.4}s`
                    }}></img>
                ))}
            </div>
        </div>
    )
}
