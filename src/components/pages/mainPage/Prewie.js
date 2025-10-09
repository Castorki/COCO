import React from 'react'

export const Prewie = () => {
    return (
        <div className='prewie center'>
            <div className='prewie__info'>
                <div className='prewie__info_redCircle'></div>
                <h2 className='prewie__info_header'>Digitally forward creative</h2>
                <p className='prewie__info_slogan'>
                    When it comes to interactive marketing, we've got you covered.
                    Be where the world is going</p>
                <form className='prewie__info_buttonWrapper'>
                    <input className='prewie__info_buttonWrapper_email'
                        placeholder='Enter your email'
                        type='email'
                        id='info_email'>
                    </input>
                    <button type='submit' className='prewie__info_buttonWrapper_button'
                    >
                        Try for free
                    </button>
                </form>
            </div>
            <div className='prewie__graphics'>
                <img className='prewie__graphics_greenCircle' src='prewieGreenCircle.svg' alt='background'></img>
                <img className='prewie__graphics_sales' src='sales.png' alt='sales'></img>
                <img className='prewie__graphics_customerGrowth' src='customerGrowth.png' alt='Customer Growth'></img>
                <img className='prewie__graphics_statistic' src='statistic.png' alt='statistic'></img>
            </div>
        </div>
    )

}
