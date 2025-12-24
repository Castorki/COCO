import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const TrandingNews = () => {

    const news = useSelector(state => state.news);
    const [trendinNews, setNews] = useState(news);
    const buttonWrapper = useRef(null);
    const [isShowing, setIsShowing] = useState(false);
    const [direction, setDirection] = useState('');

    const { ref: newsRef, inView: newsInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });


    useEffect(() => {
        if (trendinNews.length < 1) {
            buttonWrapper.current.style.display = 'none';
        } else {
            buttonWrapper.current.style.display = 'flex';
        }
    })

    const handleSwitchLeft = (e) => {
        e.preventDefault();

        setIsShowing(true)
        setDirection('left')

        setNews(prev => [prev[[prev.length - 1]], ...prev.slice(0, -1)]);

    }

    const handleSwitchRight = (e) => {
        e.preventDefault();

        setIsShowing(true)
        setDirection('right')

        setNews(prev => [...prev.slice(1), prev[0]]);

    }

    return (
        <div ref={newsRef} className='trandingNews center'>
            <h2 className={`trandingNews__title ${newsInView ? 'animated' : ''}`}>Trending news from Coca</h2>
            <p className={`trandingNews__article ${newsInView ? 'animated' : ''}`}>we have some new Service to pamper you</p>
            <div className='trandingNews__wrapper'>
                {trendinNews.length > 0 ? (
                    trendinNews.slice(0, 2).map(item => (
                        <div key={item.id} className={`trandingNews__wrapper_itemWrapper ${newsInView && !isShowing ? 'animated' : 'switching'} ${direction}`}>
                            <img className='trandingNews__itemWrapper_img' src={item.img} alt='' ></img>
                            <div className='trandingNews__itemWrapper_publishData'>
                                <p className='trandingNews__itemWrapper_dateOfPublication'> {item.publishDate}</p>
                                <p className='trandingNews__itemWrapper_author'>by : {item.author}</p>
                            </div>
                            <Link to={'/detailBlog'} state={{ title: item.title, author: item.author }}><h2 className='trandingNews__itemWrapper_title'>{item.title}</h2></Link>
                        </div>
                    ))
                ) : (
                    <div className={`trandingNews__wrapper_emptyNews ${newsInView && !isShowing ? 'animated' : 'notAnimated'}`}>
                        <img className='wrapper__emptyNews_img' src='emptyTrendingNews.png' alt=''></img>
                        <h2 className='wrapper__emptyNews_title'>Interesting news will be added soon</h2>
                    </div>
                )}
                <div ref={buttonWrapper} className={`trandingNews__wrapper_nav ${newsInView && !isShowing ? 'animated' : 'notAnimated'}`}>
                    <img className='trandingNews_nav_arrows' src='newsArrows.svg' alt='news navigation'></img>
                    <button className='trandingNews__nav_button left' onClick={handleSwitchLeft}></button>
                    <button className='trandingNews__nav_button right' onClick={handleSwitchRight}></button>
                </div>
            </div>
        </div>
    )
}



