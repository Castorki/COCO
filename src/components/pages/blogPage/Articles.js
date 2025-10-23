import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Articles = () => {

    const articlesArray = useSelector(state => state.articles)
    const [articles, setArticles] = useState(articlesArray);

    const handleSwitchLeft = (e) => {
        e.preventDefault();

        setArticles(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }

    const handleSwitchRight = (e) => {
        e.preventDefault();

        setArticles(prev => [...prev.slice(1), prev[0]])
    }

    return (
        <div className='articles center'>
            <div className='articles__header'>
                <h2 className='articles__header_title'>Articles</h2>
                <p className='articles__header_article'>Complex tech decoded by engineers, business trends analyzed by experts.</p>
                <div className='articles__header_buttonWrapper'>
                    <button className='articles__buttonWrapper_button left' onClick={handleSwitchLeft}>
                        <img src='rewieNavLeft.svg' alt=''></img>
                    </button>
                    <button className='articles__buttonWrapper_button right' onClick={handleSwitchRight}>
                        <img src='rewieNavRight.svg' alt=''></img>
                    </button>
                </div>
            </div>
            <ul className='articles__list'>
                {articles.map(item => (
                    <li key={item.id} className='articles__list_item'>
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
