import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const TrandingNews = () => {

    const news = useSelector(state => state.news);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedItems, setDisplayedItems] = useState([]);
    const buttonWrapper = useRef(null);

    const [direction, setDirection] = useState('');

    const { ref: newsRef, inView: newsInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        if (displayedItems.length < 1) {
            buttonWrapper.current.style.display = 'none';
        } else {
            buttonWrapper.current.style.display = 'flex';
        }
    })

    const getDisplayedItems = (index) => {
        if (news.length === 0) return [];

        const items = [];
        for (let i = -1; i <= 2; i++) {
            let itemIndex = index + i;
            if (itemIndex < 0) itemIndex += news.length;
            if (itemIndex >= news.length) itemIndex -= news.length;

            items.push({
                ...news[itemIndex]
            });
        }
        return items;
    };

    useEffect(() => {
        setDisplayedItems(getDisplayedItems(currentIndex));
    }, [news, currentIndex]);


    const handleNext = () => {
        if (news.length === 0) return;

        setDirection('next');

        setCurrentIndex(prev => (prev + 1) % news.length);
    };

    const handlePrev = () => {
        if (news.length === 0) return;

        setDirection('prev');

        setCurrentIndex(prev => (prev - 1 + news.length) % news.length);
    };

    return (
        <div ref={newsRef} className='trandingNews center'>
            <h2 className={`trandingNews__title ${newsInView ? 'animated' : ''}`}>Trending news from Coca</h2>
            <p className={`trandingNews__article ${newsInView ? 'animated' : ''}`}>we have some new Service to pamper you</p>
            <div className={`trandingNews__wrapper ${newsInView ? 'animated' : ''}`}>
                {displayedItems.length > 0 ? (
                    displayedItems.map((item, index) => (
                        <div key={`item_${index} - ${item.id}`} className={`trandingNews__wrapper_itemWrapper ${`item-${index}`}
                         ${`slide-${direction}`}`}>
                            <img className='trandingNews__itemWrapper_img' src={item.img} alt='' ></img>
                            <div className='trandingNews__itemWrapper_publishData'>
                                <p className='trandingNews__itemWrapper_dateOfPublication'> {item.publishDate}</p>
                                <p className='trandingNews__itemWrapper_author'>by : {item.author}</p>
                            </div>
                            <Link to={'/detailBlog'} state={{ title: item.title, author: item.author }}><h2 className='trandingNews__itemWrapper_title'>{item.title}</h2></Link>
                        </div>
                    ))
                ) : (
                    <div className={`trandingNews__wrapper_emptyNews ${newsInView ? 'animated' : ''}`}>
                        <img className='wrapper__emptyNews_img' src='emptyTrendingNews.png' alt=''></img>
                        <h2 className='wrapper__emptyNews_title'>Interesting news will be added soon</h2>
                    </div>
                )}
                <div ref={buttonWrapper} className={`trandingNews__wrapper_nav ${newsInView ? 'animated' : ''}`}>
                    <img className='trandingNews_nav_arrows' src='newsArrows.svg' alt='news navigation'></img>
                    <button className='trandingNews__nav_button left' onClick={handlePrev}></button>
                    <button className='trandingNews__nav_button right' onClick={handleNext}></button>
                </div>
            </div>
        </div>
    )
}



