import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { Navigation } from './navigation/Navigation'
import { FooterBottom } from './FooterBottom'
import { FooterHead } from './FooterHead'

export const Footer = ({ theme }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`footer footer__${theme} center`}>
            <div className={`footer__backround ${theme}`}>
                <div className='footer__backround_redCircle'></div>
                <div className='footer__backround_greenCircle'></div>
            </div>
            <FooterHead theme={theme} />
            <div className='footer__logoAndNavWrapper'>
                {windowWidth > 800 ? (
                    <>
                        <Logo theme={theme} />
                        <Navigation theme={theme} />
                    </>
                ) : (
                    <Logo theme={theme} />
                )}
            </div>
            <FooterBottom theme={theme} />
        </div>
    )
}
