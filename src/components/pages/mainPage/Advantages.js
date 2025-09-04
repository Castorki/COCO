import React from 'react'

export const Advantages = () => {
    return (
        <div className='main__advantages center'>
            <div className='main__advantages_photoWrapper'>
                <img className='main__advantages_photoWrapper_photo' src='officePhoto.png' alt='Office'></img>
                <img className='main__advantages_photoWrapper_barChart' src='barChart.png' alt='Statistic'></img>
            </div>
            <div className='main__advantages_wrapper'>
                <h2 className='main__advantages_wrapper_title'>
                    Passion to increase company revenue up to 85%
                </h2>
                <p className='main__advantages_wrapper_article'>
                    Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging
                </p>
                <ul className='main__advantages_wrapper_list'>
                    <li className='main__advantages_wrapper_list_element'>
                        Close more deals with single - page contact managment
                    </li>
                    <li className='main__advantages_wrapper_list_element'>
                        Enjoy one-click calling, call scripts and voicemail automation
                    </li>
                    <li className='main__advantages_wrapper_list_element'>
                        Take stages and milestones of your deals to keep the sales process an track
                    </li>
                </ul>
            </div>
        </div>
    )
}
