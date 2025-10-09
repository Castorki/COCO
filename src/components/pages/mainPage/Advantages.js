import React from 'react'

export const Advantages = () => {
    return (
        <div className='advantages center'>
            <div className='advantages__photoWrapper'>
                <img className='advantages__photoWrapper_photo' src='officePhoto.png' alt='Office'></img>
                <img className='advantages__photoWrapper_barChart' src='barChart.png' alt='Statistic'></img>
            </div>
            <div className='advantages__wrapper'>
                <h2 className='advantages__wrapper_title'>
                    Passion to increase company revenue up to 85%
                </h2>
                <p className='advantages__wrapper_article'>
                    Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging
                </p>
                <ul className='advantages__wrapper_list'>
                    <li className='advantages__wrapper_list_element'>
                        Close more deals with single - page contact managment
                    </li>
                    <li className='advantages__wrapper_list_element'>
                        Enjoy one-click calling, call scripts and voicemail automation
                    </li>
                    <li className='advantages__wrapper_list_element'>
                        Take stages and milestones of your deals to keep the sales process an track
                    </li>
                </ul>
            </div>
        </div>
    )
}
