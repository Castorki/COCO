import React from 'react'

export const Logo = ({ theme }) => {
    return (
        <div className='footer__logo'>

            <h2 className='footer__logo_title'><img className='footer__logo_imeg' src='logo.svg' alt='Site logo'></img> COCA</h2>
            <p className='footer__logo_descr'>We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</p>
        </div>
    )
}
