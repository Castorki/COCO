import React from 'react';
import { useInView } from 'react-intersection-observer';

export const PricingHeader = () => {

    const { ref: pricingHeaderRef, inView: pricingHeaderInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <div ref={pricingHeaderRef} className='pricingHeader center'>
            <div className='pricingHeader__background' >
                <div className='pricingHeader__background_redCircle'></div>
                <div className='pricingHeader__background_greenCircle'></div>
            </div>
            <p className={`pricingHeader__icon ${pricingHeaderInView ? 'animated' : ''}`}>Pricing plans
                <img className='pricingHeader__icon_emoji' src='pricingPlanEmoji.png' alt=''></img>
            </p>
            <h2 className={`pricingHeader__title ${pricingHeaderInView ? 'animated' : ''}`}>Choose a plan for a more advanced business</h2>
            <p className={`pricingHeader__annual ${pricingHeaderInView ? 'animated' : ''}`}>
                <img className='pricingHeader__annual_icon' src='annualPricingIcon.svg' alt=''></img> Annual pricing (save 20%)
            </p>
        </div>
    )
}
