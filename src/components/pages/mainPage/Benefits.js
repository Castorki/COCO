import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



export const Benefits = () => {

    const benefits = useSelector(state => state.benefits)
    
    return (
        <div className='benefits center'>
            <h2 className='benefits__title'>
                Advertise, analyze, and optimize! We do it all for you
            </h2>
            <p className='benefits__article'>
                Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
            </p>
            <div className='benefits__list'>
                {benefits.map(item => (
                    <div key={item.id} className='benefits__list_listEl'>
                        <div className='benefits__list_listEl_pictures'>
                            <img className='benefits__list_listEl_picture_photo' src={item.photo} alt=''></img>
                            <Link to={'/detailBlog'} className='list__item_link'> <img className='benefits__list_listEl_pictures_icon' src={item.icon} alt=''></img></Link>
                        </div>
                        <div className='benefits__list_listEl_info'>
                            <Link to={'/detailBlog'} className='list__item_link'>
                                <h3 className='benefits__list_listEl_info_title'>
                                    {item.title}

                                </h3>
                            </Link>
                            <p className='benefits__list_listEl_info_article'>
                                {item.article}
                            </p>
                        </div>
                    </div>
                ))}
                {/* <div className='benefits__list_listEl'>
                    <div className='benefits__list_listEl_pictures'>
                        <img className='benefits__list_listEl_picture_photo' src='lead.png' alt='Lead photo'></img>
                        <img className='benefits__list_listEl_pictures_icon' src='leadIcon.svg' alt='Lead icon'></img>
                    </div>
                    <div className='benefits__list_listEl_info'>
                        <h3 className='benefits__list_listEl_info_title'>
                            Lead happiness for customers
                        </h3>
                        <p className='benefits__list_listEl_info_article'>
                            Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
                        </p>
                    </div>
                </div>
                <div className='benefits__list_listEl'>
                    <div className='benefits__list_listEl_pictures'>
                        <img className='benefits__list_listEl_picture_photo' src='mattually.png' alt='mattually photo'></img>
                        <img className='benefits__list_listEl_pictures_icon' src='mattuallyIcon.svg' alt='mattually icon'></img>
                    </div>
                    <div className='benefits__list_listEl_info'>
                        <h3 className='benefits__list_listEl_info_title'>
                            Mutually support each other
                        </h3>
                        <p className='benefits__list_listEl_info_article'>
                            Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
                        </p>
                    </div>
                </div>
                <div className='benefits__list_listEl'>
                    <div className='benefits__list_listEl_pictures'>
                        <img className='benefits__list_listEl_picture_photo' src='growing.png' alt='growing photo'></img>
                        <img className='benefits__list_listEl_pictures_icon' src='growingIcon.svg' alt='growing icon'></img>
                    </div>
                    <div className='benefits__list_listEl_info'>
                        <h3 className='benefits__list_listEl_info_title'>
                            Have fun growing together
                        </h3>
                        <p className='benefits__list_listEl_info_article'>
                            Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
                        </p>
                    </div>
                </div>
                <div className='benefits__list_listEl'>
                    <div className='benefits__list_listEl_pictures'>
                        <img className='benefits__list_listEl_picture_photo' src='buisness.png' alt='buisness photo'></img>
                        <img className='benefits__list_listEl_pictures_icon' src='buisnessIcon.svg' alt='buisness icon'></img>
                    </div>
                    <div className='benefits__list_listEl_info'>
                        <h3 className='benefits__list_listEl_info_title'>
                            Make Your Business Grow
                        </h3>
                        <p className='benefits__list_listEl_info_article'>
                            Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
