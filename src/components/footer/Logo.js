import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Logo = ({ theme }) => {

    const { ref: footerLogoRef, inView: footerLogoInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={footerLogoRef} className={`footer__logo ${theme}`}>
            <h2 className={`footer__logo_title ${footerLogoInView ? 'animated' : ''}`}><img className='footer__logo_imeg' src={`${theme === 'light' ? 'logoLight.svg' : 'logoDark.svg'}`} alt='Site logo'></img> COCA</h2>
            <p className={`footer__logo_descr ${footerLogoInView ? 'animated' : ''}`}>We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</p>
        </div>
    )
}
