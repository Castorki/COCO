import React from 'react'

export const Prewie = () => {
    return (
        <div className='main__prewie'>
            <div className='main__prewie_info'>
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
        </div>
    )
}
