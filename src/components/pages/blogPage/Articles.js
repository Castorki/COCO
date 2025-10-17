import React from 'react';
import { Link } from 'react-router-dom';


export const Articles = () => {
    return (
        <div className='articles center'>
            <div className='articles__header'>
                <h2 className='articles__header_title'>Articles</h2>
                <p className='articles__header_article'>Complex tech decoded by engineers, business trends analyzed by experts.</p>
                <div className='articles__header_buttonWrapper'>
                    <button className='articles__buttonWrapper_button left'>
                        <img src='rewieNavLeft.svg' alt=''></img>
                    </button>
                    <button className='articles__buttonWrapper_button right'>
                        <img src='rewieNavRight.svg' alt=''></img>
                    </button>
                </div>
            </div>
            <div className='articles__list'>
                <div className='articles__list_item'>
                    <img className='list__item_photo' src='uxDesigner.png' alt=''></img>
                    <h3 className='list__item_title'>List of UX Designer Portfolio / Case Studies where you can make money</h3>
                    <p className='list__item_article'>Here are some portfolios / Case Studies from UX Designers that you can use as a reference for creating a portfolio. Two interesting things from their portfolio are:</p>
                    <Link to={'/detailBlog'} className='list__item_link'><button className='list__item_button'>Read More</button></Link>
                </div>
                <div className='articles__list_item'>
                    <img className='list__item_photo' src='skyroketing.png' alt=''></img>
                    <h3 className='list__item_title'>Skyrocketing in The Designing Career, Why Not?</h3>
                    <p className='list__item_article'>Ever thought of jumping into the world of design as a career? If not, you may want to look at what the word 'design' actually means. Design is a method of designing aesthetic actions that are carried out.</p>
                    <Link to={'/detailBlog'} className='list__item_link'><button className='list__item_button'>Read More</button></Link>
                </div>
                <div className='articles__list_item'>
                    <img className='list__item_photo' src='missingElements.png' alt=''></img>
                    <h3 className='list__item_title'>Elements that may be missed when designing the UI</h3>
                    <p className='list__item_article'>This is an article that talks about the little elements that are often overlooked when designing UI.</p>
                    <Link to={'/detailBlog'} className='list__item_link'><button className='list__item_button'>Read More</button></Link>
                </div>
            </div>
        </div>
    )
}
