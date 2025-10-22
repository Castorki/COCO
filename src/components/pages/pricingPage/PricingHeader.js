import React from 'react'

export const PricingHeader = () => {
    return (
        <div className='pricingHeader center'>
            <div className='pricingHeader__background' >
                <div className='pricingHeader__background_redCircle'></div>
                <div className='pricingHeader__background_greenCircle'></div>
            </div>
            <p className='pricingHeader__icon'>Pricing plans
                <img className='pricingHeader__icon_emoji' src='pricingPlanEmoji.png' alt=''></img>
            </p>
            <h2 className='pricingHeader__title'>Choose a plan for a more advanced business</h2>
            <p className='pricingHeader__annual'>
                <img className='pricingHeader__annual_icon' src='annualPricingIcon.svg' alt=''></img> Annual pricing (save 20%)
            </p>
        </div>
    )
}
