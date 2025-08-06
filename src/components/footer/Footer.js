import React from 'react'
import { Logo } from './Logo'
import { Navigation } from './navigation/Navigation'
import { FooterBottom } from './FooterBottom'
import { FooterHead } from './FooterHead'

export const Footer = ({ theme }) => {

    return (
        <div className={`footer footer__${theme} center`}>
            <div className={`footer__backround ${theme}`}>
                <div className='footer__backround_orangeCircle'><img src='orangeCircle.svg' alt='background'></img></div>
                <div className='footer__backround_greenCircle'><img src='greenCircle.svg' alt='background'></img></div>
            </div>
            <FooterHead theme={theme} />
            <div className='footer__logoAndNavWrapper'>
                <Logo theme={theme} />
                <Navigation theme={theme} />
            </div>
            <FooterBottom theme={theme} />
        </div>
    )
}
