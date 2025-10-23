import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const OurBeliefs = () => {

    const belifs = useSelector(state => state.belifs);
    const [belifsArray, setBelifsArray] = useState(belifs);
    const blogButton = useRef(null);


    useEffect(() => {
        if (belifsArray.length < 1) {
            blogButton.current.style.display = 'none'
        }
    })

    const handleSwitchLeft = (e) => {
        e.preventDefault();

        setBelifsArray(prev => [prev[[prev.length - 1]], ...prev.slice(0, -1)]);
    }

    const handleSwitchRight = (e) => {
        e.preventDefault();

        setBelifsArray(prev => [...prev.slice(1), prev[0]]);
    }

    return (
        <div className='ourBeliefs center'>
            <img className='ourBeliefs__miniBlogPhoto' src='miniBlogPhoto.png' alt=''></img>
            <div ref={blogButton} className='ourBeliefs__buttonWraper'>
                <img className='ourBeliefs__buttonWraper_arrows' src='newsArrows.svg' alt=''></img>
                <button className='ourBeliefs__buttonWraper_button left' onClick={handleSwitchLeft}></button>
                <button className='ourBeliefs__buttonWraper_button right' onClick={handleSwitchRight}></button>
            </div>
            {belifsArray.length > 0 ? (
                belifsArray.slice(0, 1).map(item => (
                    <div key={item.id} className='ourBeliefs__miniBlog'>
                        <img className='ourBeliefs__miniBlog_prewie' src={item.prewie} alt=''></img>
                        <p className='ourBeliefs__miniBlog_title'>{item.title}</p>
                        <p className='ourBeliefs__miniBlog_article'>
                            {item.article}
                        </p>
                        <Link to={'/detailBlog'} state={{ title: item.title, author: item.author }}> <button className='ourBeliefs__miniBlog_button'><span className='ourBeliefs__miniBlog_button-text'> See Details &rarr;</span></button></Link>
                        <div className='ourBeliefs__miniBlog_redCircle'></div>
                    </div>
                ))
            ) : (
                <div className='ourBeliefs__emptyList'>
                    <h3 className='ourBeliefs__emptyList_title'> Useful articles will be added soon</h3>
                </div>
            )}

        </div>
    )
}
