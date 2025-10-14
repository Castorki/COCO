import React from 'react'

export const PricingPlans = () => {
    return (
        <div className='pricingPlans center'>
            <div className='pricingPlans__plan'>
                <img className='pricingPlans__plan_icon' src='starterPlan.svg'></img>
                <h2 className='pricingPlans__plan_title'>Starter</h2>
                <p className='pricingPlans__plan_article'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className='pricingPlans__plan_price'>$100 <span className='pricingPlans__plan_perMonth'>
                    / mo</span></p>
                <ul className='pricingPlans__plan_list'>
                    What’s included:
                    <li className='pricingPlans__list_item'>Unlimited Upload</li>
                    <li className='pricingPlans__list_item'>Advanced Statistic</li>
                    <li className='pricingPlans__list_item'>Profile Badge</li>
                    <li className='pricingPlans__list_item'>Access to the community</li>
                    <li className='pricingPlans__list_item'>History of all Liked Photos</li>
                    <li className='pricingPlans__list_item'>Directory Listing</li>
                    <li className='pricingPlans__list_item'>Customize Your Profile</li>
                    <li className='pricingPlans__list_item'>Display Your Workshops</li>
                </ul>
                <button className='pricingPlans__plan_button'>Chose Plan</button>
            </div>
            <div className='pricingPlans__plan popular'>
                <img className='pricingPlans__plan_icon' src='popularPlan.svg'></img>
                <p className='pricingPlans__plan_bestOffer'>Best Offers<img className='pricingPlans__plan_emoji' src='pricingPlanBestOffer.png'></img></p>
                <h2 className='pricingPlans__plan_title'>Popular</h2>
                <p className='pricingPlans__plan_article'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className='pricingPlans__plan_price'>$1400 <span className='pricingPlans__plan_perMonth'>/ mo</span></p>
                <ul className='pricingPlans__plan_list'>
                    What’s included:
                    <li className='pricingPlans__list_item'>Unlimited Upload</li>
                    <li className='pricingPlans__list_item'>Advanced Statistic</li>
                    <li className='pricingPlans__list_item'>Profile Badge</li>
                    <li className='pricingPlans__list_item'>Access to the community</li>
                    <li className='pricingPlans__list_item'>History of all Liked Photos</li>
                    <li className='pricingPlans__list_item'>Directory Listing</li>
                    <li className='pricingPlans__list_item'>Customize Your Profile</li>
                    <li className='pricingPlans__list_item'>Display Your Workshops</li>
                </ul>
                <button className='pricingPlans__plan_button'>Chose Plan</button>
            </div>
            <div className='pricingPlans__plan'>
                <img className='pricingPlans__plan_icon' src='enterprisePlan.svg'></img>
                <h2 className='pricingPlans__plan_title'>Enterprise</h2>
                <p className='pricingPlans__plan_article'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className='pricingPlans__plan_price'>$2100 <span className='pricingPlans__plan_perMonth'>/ mo</span></p>
                <ul className='pricingPlans__plan_list'>
                    What’s included:
                    <li className='pricingPlans__list_item'>Unlimited Upload</li>
                    <li className='pricingPlans__list_item'>Advanced Statistic</li>
                    <li className='pricingPlans__list_item'>Profile Badge</li>
                    <li className='pricingPlans__list_item'>Access to the community</li>
                    <li className='pricingPlans__list_item'>History of all Liked Photos</li>
                    <li className='pricingPlans__list_item'>Directory Listing</li>
                    <li className='pricingPlans__list_item'>Customize Your Profile</li>
                    <li className='pricingPlans__list_item'>Display Your Workshops</li>
                </ul>
                <button className='pricingPlans__plan_button' >Chose Plan</button>
            </div>
        </div>
    )
}
