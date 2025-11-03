import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export const PricingPlans = () => {

    const plans = useSelector(state => state.plans);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false)
        }, 3000);
    }

    return (
        <div className='pricingPlans center'>
            {plans.map(item => (
                <div key={item.id} className={`pricingPlans__plan ${item.type.toLowerCase() === 'popular' ? ('popular') : ('')}`}>
                    <img className='pricingPlans__plan_icon' src={item.icon} alt=''></img>
                    {item.type.toLowerCase() === 'popular' ? (
                        <p className='pricingPlans__plan_bestOffer'>Best Offers <img src='pricingPlanBestOffer.png' alt=''></img></p>
                    ) : ('')}
                    <h2 className='pricingPlans__plan_title'>{item.type}</h2>
                    <p className='pricingPlans__plan_article'>{item.descr}</p>
                    <p className='pricingPlans__plan_price'>{item.price}<span className='pricingPlans__plan_perMonth'>
                        / mo</span></p>
                    <ul className='pricingPlans__plan_list'>
                        What’s included:
                        {item.included.map(element => (
                            <>
                                <li className={`pricingPlans__list_item ${element.status === 'unavailable' ? ('unavailable') : ('')}`}>{element.name}</li>
                            </>
                        ))}
                    </ul>
                    <button className='pricingPlans__plan_button' onClick={handleSubmit}>Chose Plan</button>
                </div>
            ))}
            {showSuccess &&
                <div className='success'>
                    Заявка получена! Ждите дальнейших инструкций по почте!
                </div>
            }
        </div>
    )
}
