import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const TrandingNews = () => {

    const news = useSelector(state => state.news);
    const [trendinNews, setNews] = useState(news);
    const buttonWrapper = useRef(null);

    useEffect(() => {
        if (trendinNews.length < 1) {
            buttonWrapper.current.style.display = 'none';
        }
    })

    const handleSwitchLeft = (e) => {
        e.preventDefault();
        setNews(prev => [prev[[prev.length - 1]], ...prev.slice(0, -1)]);
    }

    const handleSwitchRight = (e) => {
        e.preventDefault();
        setNews(prev => [...prev.slice(1), prev[0]]);
    }

    return (
        <div className='trandingNews center'>
            <h2 className='trandingNews__title'>Trending news from Coca</h2>
            <p className='trandingNews__article'>we have some new Service to pamper you</p>
            <div className='trandingNews__wrapper'>
                {trendinNews.length > 0 ? (
                    trendinNews.slice(0, 2).map(item => (
                        <div key={item.id} className='trandingNews__wrapper_itemWrapper'>
                            <img className='trandingNews__wrapper_itemWrapper_img' src={item.img} alt='' ></img>
                            <div className='trandingNews__wrapper_itemWrapper_publishData'>
                                <p className='trandingNews__wrapper_itemWrapper_publishData_dateOfPublication'> {item.publishDate}</p>
                                <p className='trandingNews__wrapper_itemWrapper_publishData_author'>by : {item.author}</p>
                            </div>
                            <Link to={'/detailBlog'} state={{ title: item.title, author: item.author }}><h2 className='trandingNews__wrapper_itemWrapper_title'>{item.title}</h2></Link>
                        </div>
                    ))
                ) : (
                    <div className='trandingNews__wrapper_emptyNews'>
                        <img className='wrapper__emptyNews_img' src='emptyTrendingNews.png' alt=''></img>
                        <h2 className='wrapper__emptyNews_title'>Interesting news will be added soon</h2>
                    </div>
                )}
                <div ref={buttonWrapper} className='trandingNews__wrapper_itemWrapper_nav'>
                    <img className='trandingNews__wrapper_itemWrapper_nav_arrows' src='newsArrows.svg' alt='news navigation'></img>
                    <button className='trandingNews__wrapper_itemWrapper_nav_button left' onClick={handleSwitchLeft}></button>
                    <button className='trandingNews__wrapper_itemWrapper_nav_button right' onClick={handleSwitchRight}></button>
                </div>
            </div>
        </div>
    )
}



