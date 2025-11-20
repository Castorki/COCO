import React from 'react';
import { useInView } from 'react-intersection-observer';


export const FooterHead = ({ theme }) => {

    const { ref: footerHeadRef, inView: footerHeadInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={footerHeadRef} className={`footer__head ${theme}`}>
            <h2 className={`footer__head_title ${footerHeadInView ? 'animated' : ''}`}>
                Think beyond the wave
            </h2>
            <button className={`footer__head_button ${footerHeadInView ? 'animated' : ''}`}><span className='footer__head_button_text'>Try for free</span></button>
            <p className={`footer__head_article ${footerHeadInView ? 'animated' : ''}`}>
                Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
            </p>
        </div>
    )
}
