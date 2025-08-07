import React from 'react'

export const FooterHead = ({ theme }) => {

    return (
        <div className={`footer__head ${theme}`}>
            <h2 className='footer__head_title'>
                Think beyond the wave
            </h2>
            <button className='footer__head_button'><span className='footer__head_button_text'>Try for free</span></button>
            <p className='footer__head_article'>
                Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
            </p>
        </div>
    )
}
