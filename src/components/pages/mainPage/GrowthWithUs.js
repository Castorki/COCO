import React from 'react'
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';


export const GrowthWithUs = () => {

    const grow = useSelector(state => state.growthWithUs);

    const { ref: growhRef, inView: growhInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        <div ref={growhRef} className='growthWithUs center'>
            <div className='growthWithUs__info'>
                {grow.map((item, index) => (
                    <div key={item.id} className={`growthWithUs__info_element ${growhInView ? 'animated' : ''}`}
                        style={{
                            '--delay': `${index * 0.2}s`
                        }}>
                        <h2 className='growthWithUs__info_title'>{item.title}</h2>
                        <p className='growthWithUs__info_article'>
                            {item.article}
                        </p>
                    </div>
                ))}
            </div>
            <img className={`growthWithUs__photo ${growhInView ? 'animated' : ''}`} src='growthWhitUsPhoto.png' alt=''></img>
            <div className='growthWithUs__quote'>
                <h2 className={`growthWithUs__quote_title ${growhInView ? 'animated' : ''}`}>
                    Lift your business to new heights with our digital marketing services
                </h2>
                <p className={`growthWithUs__quote_article ${growhInView ? 'animated' : ''}`}>
                    To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers
                </p>
            </div>
        </div>
    )
}
