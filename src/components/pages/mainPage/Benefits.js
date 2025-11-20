import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


export const Benefits = () => {

    const benefits = useSelector(state => state.benefits);

    const {ref: benefitsRef, inView: benefitsInView} = useInView({
        threshold: 0.3,
        triggerOnce: true
    })
    
    return (
        <div ref={benefitsRef} className='benefits center'>
            <h2 className={`benefits__title ${benefitsInView ? 'animated' : ''}`}>
                Advertise, analyze, and optimize! We do it all for you
            </h2>
            <p className={`benefits__article ${benefitsInView ? 'animated' : ''}`}>
                Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
            </p>
            <div className='benefits__list'>
                {benefits.map((item, index) => (
                    <div key={item.id} className={`benefits__list_listEl ${benefitsInView ? 'animated' : ''}`}
                    style={{
                        '--delay' : `${(index + 1.5) * 0.4}s`
                    }}>
                        <div className='benefits__listEl_pictures'>
                            <img className='listEl__picture_photo' src={item.photo} alt=''></img>
                            <Link to={'/detailBlog'}  state={{ title: item.title, author: item.author }} className='list__item_link'> <img className='listEl__pictures_icon' src={item.icon} alt=''></img></Link>
                        </div>
                        <div className='benefits__listEl_info'>
                            <Link to={'/detailBlog' }  state={{ title: item.title, author: item.author }} className='list__item_link'>
                                <h3 className='listEl_info_title'>
                                    {item.title}

                                </h3>
                            </Link>
                            <p className='listEl_info_article'>
                                {item.article}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
