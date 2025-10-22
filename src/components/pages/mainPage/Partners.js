import React from 'react'
import { useSelector } from 'react-redux'

export const Partners = ({ showBorder }) => {

    const partners = useSelector(state => state.partners)

    return (
        <div className={`partners ${showBorder ? 'showBorder' : ''} center`}>
            <div className='partners__info'>
                <h2 className='partners__info_title'>890+</h2>
                <p className='partners__info_article'>
                    some big companies that we work with, and trust us very much
                </p>
            </div>
            <div className='partners__logos'>
                {partners.map(item => (

                    <img key={item.id} className='partners__logos_logo' src={item.logo} alt={item.alt}></img>
                ))}
            </div>
        </div>
    )
}
