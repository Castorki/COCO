import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


export const Articles = () => {

    const articlesArray = useSelector(state => state.articles)
    const [articles, setArticles] = useState(articlesArray);

    const { ref: articlesRef, inView: articlesInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const handleSwitchLeft = (e) => {
        e.preventDefault();

        setArticles(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }

    const handleSwitchRight = (e) => {
        e.preventDefault();

        setArticles(prev => [...prev.slice(1), prev[0]])
    }

    return (
        <div ref={articlesRef} className='articles center'>
            <div className='articles__header'>
                <h2 className={`articles__header_title ${articlesInView ? 'animated' : ''}`}>Articles</h2>
                <p className={`articles__header_article ${articlesInView ? 'animated' : ''}`}>Complex tech decoded by engineers, business trends analyzed by experts.</p>
                <div className={`articles__header_buttonWrapper ${articlesInView ? 'animated' : ''}`}>
                    <button className='articles__buttonWrapper_button left' onClick={handleSwitchLeft}>
                        <img src='rewieNavLeft.svg' alt=''></img>
                    </button>
                    <button className='articles__buttonWrapper_button right' onClick={handleSwitchRight}>
                        <img src='rewieNavRight.svg' alt=''></img>
                    </button>
                </div>
            </div>
            <ul className='articles__list'>
                {articles.map((item, index) => (
                    <li key={item.id} className={`articles__list_item ${articlesInView ? 'animated' : ''}`}
                    style={{
                        '--delay' : `${index * 0.4}s`
                    }}>
                        <img className='list__item_photo' src={item.photo} alt=''></img>
                        <h3 className='list__item_title'>{item.title}</h3>
                        <p className='list__item_article'>{item.descr}</p>
                        <Link to={'/detailBlog'}  state={{ title: item.title, author: item.author }} className='list__item_link'><button className='list__item_button'>Read More</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
