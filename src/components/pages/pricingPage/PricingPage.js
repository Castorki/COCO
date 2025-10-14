import React from 'react'
import './PricingPage.css'
import { PricingHeader } from './PricingHeader'
import { PricingPlans } from './PricingPlans'
import { FrequantlyQuestions } from './FrequantlyQuestions'

export const PricingPage = () => {
    return (
        <div>
            <PricingHeader />
            <PricingPlans />
            <FrequantlyQuestions />
        </div>
    )
}
