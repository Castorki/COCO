import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


export const Articles = () => {

    const articlesArray = useSelector(state => state.articles)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [direction, setDirection] = useState('');

    const { ref: articlesRef, inView: articlesInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const getDisplayedItems = (index) => {
        if (articlesArray.length === 0) return [];

        const items = [];
        for (let i = -1; i <= 3; i++) {
            let itemIndex = index + i;
            if (itemIndex < 0) itemIndex += articlesArray.length;
            if (itemIndex >= articlesArray.length) itemIndex -= articlesArray.length;

            items.push({
                ...articlesArray[itemIndex]
            });
        }
        return items;
    };

    useEffect(() => {
        setDisplayedItems(getDisplayedItems(currentIndex));
    }, [articlesArray, currentIndex]);

    const handleNext = () => {
        if (articlesArray.length === 0) return;

        setDirection('next');

        setCurrentIndex(prev => (prev + 1) % articlesArray.length);
    };

    const handlePrev = () => {
        if (articlesArray.length === 0) return;

        setDirection('prev');

        setCurrentIndex(prev => (prev - 1 + articlesArray.length) % articlesArray.length);
    };

    return (
        <div ref={articlesRef} className='articles center'>
            <div className='articles__header'>
                <h2 className={`articles__header_title ${articlesInView ? 'animated' : ''}`}>Articles</h2>
                <p className={`articles__header_article ${articlesInView ? 'animated' : ''}`}>Complex tech decoded by engineers, business trends analyzed by experts.</p>
                <div className={`articles__header_buttonWrapper ${articlesInView ? 'animated' : ''}`}>
                    <button className='articles__buttonWrapper_button left' onClick={handlePrev}>
                        <img src='rewieNavLeft.svg' alt=''></img>
                    </button>
                    <button className='articles__buttonWrapper_button right' onClick={handleNext}>
                        <img src='rewieNavRight.svg' alt=''></img>
                    </button>
                </div>
            </div>
            <ul className='articles__list'>
                {displayedItems.map((item, index) => (
                    <li key={`item_${index} - ${item.id}`} className={`articles__list_item ${articlesInView ? 'animated' : ''} ${`item-${index}`} 
                    ${`slide-${direction}`}`}
                        style={{
                            '--delay': `${index * 0.4}s`
                        }}>
                        <img className='list__item_photo' src={item.photo} alt=''></img>
                        <h3 className='list__item_title'>{item.title}</h3>
                        <p className='list__item_article'>{item.descr}</p>
                        <Link to={'/detailBlog'} state={{ title: item.title, author: item.author }} className='list__item_link'><button className='list__item_button'>Read More</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
