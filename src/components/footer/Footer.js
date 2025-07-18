import React from 'react'
import { Logo } from './Logo'
import { Navigation } from './navigation/Navigation'
import { FooterBottom } from './FooterBottom'

export const Footer = ({ theme }) => {

    return (
        <div className={`footer footer__${theme}`}>
            <div className='footer__logoAndNavWrapper'>
                <Logo theme={theme} />
                <Navigation />
            </div>
            <FooterBottom theme={theme} />
        </div>
    )
}
