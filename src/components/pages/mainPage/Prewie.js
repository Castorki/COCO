import React from 'react'

export const Prewie = () => {
    return (
        <div className='main__prewie center'>
            <div className='main__prewie_info'>
                <div className='main__prewie_info_redCircle'></div>
                <h2 className='main__prewie_info_header'>Digitally forward creative</h2>
                <p className='main__prewie_info_slogan'>
                    When it comes to interactive marketing, we've got you covered.
                    Be where the world is going</p>
                <form className='main__prewie_info_buttonWrapper'>
                    <input className='main__prewie_info_buttonWrapper_email'
                        placeholder='Enter your email'
                        type='email'
                        id='info_email'>
                    </input>
                    <button type='submit' className='main__prewie_info_buttonWrapper_button'
                    >
                        Try for free
                    </button>
                </form>
            </div>
            <div className='main__prewie_graphics'>
                <img className='main__prewie_graphics_greenCircle' src='prewieGreenCircle.svg' alt='background'></img>
                <img className='main__prewie_graphics_sales' src='sales.png' alt='sales'></img>
                <img className='main__prewie_graphics_customerGrowth' src='customerGrowth.png' alt='Customer Growth'></img>
                <img className='main__prewie_graphics_statistic' src='statistic.png' alt='statistic'></img>
            </div>
        </div>
    )

}
