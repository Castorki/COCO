import React from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

export const Advantages = () => {
    const advantages = useSelector(state => state.advantages);

    const { ref: advantagesRef, inView: advantagesInView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });


    return (
        <div ref={advantagesRef} className='advantages center'>
            <div className={`advantages__photoWrapper ${advantagesInView ? 'animated' : ''}`}>
                <img className='advantages__photoWrapper_photo' src='officePhoto.png' alt='Office'></img>
                <img className='advantages__photoWrapper_barChart' src='barChart.png' alt='Statistic'></img>
            </div>
            <div className={`advantages__wrapper ${advantagesInView ? 'animated' : ''}`}>
                <h2 className='advantages__wrapper_title '>
                    Passion to increase company revenue up to 85%
                </h2>
                <p className='advantages__wrapper_article'>
                    Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging
                </p>
                <ul className='advantages__wrapper_list'>

                    {advantages.map(item => (
                        <li key={item.id} className={`advantages__list_element ${advantagesInView ? 'animated' : ''}`}>
                            {item.article}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
