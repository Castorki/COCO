import React from 'react'
import { useSelector } from 'react-redux'

export const GrowthWithUs = () => {

    const grow = useSelector(state => state.growthWithUs)
    return (
        <div className='growthWithUs center'>
            <div className='growthWithUs__info'>
                {grow.map(item => (
                    <div key={item.id} className='growthWithUs__info_element'>
                        <h2 className='growthWithUs__info_element_title'>{item.title}</h2>
                        <p className='growthWithUs__info_element_article'>
                            {item.article}
                        </p>
                    </div>
                ))}
            </div>
            <img className='growthWithUs__photo' src='growthWhitUsPhoto.png' alt=''></img>
            <div className='growthWithUs__quote'>
                <h2 className='growthWithUs__quote_title'>
                    Lift your business to new heights with our digital marketing services
                </h2>
                <p className='growthWithUs__quote_article'>
                    To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers
                </p>
            </div>
        </div>
    )
}
