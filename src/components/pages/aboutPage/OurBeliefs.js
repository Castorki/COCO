import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const OurBeliefs = () => {

    const belifs = useSelector(state => state.belifs);
    const [belifsArray, setBelifsArray] = useState(belifs);
    const blogButton = useRef(null);

    const { ref: belivesRef, inView: belivesInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })


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
        <div ref={belivesRef} className='ourBeliefs center'>
            <img className={`ourBeliefs__miniBlogPhoto ${belivesInView ? 'animated' : ''}`} src='miniBlogPhoto.png' alt=''></img>
            <div ref={blogButton} className={`ourBeliefs__buttonWraper ${belivesInView ? 'animated' : ''}`}>
                <img className='ourBeliefs__buttonWraper_arrows' src='newsArrows.svg' alt=''></img>
                <button className='ourBeliefs__buttonWraper_button left' onClick={handleSwitchLeft}></button>
                <button className='ourBeliefs__buttonWraper_button right' onClick={handleSwitchRight}></button>
            </div>
            {belifsArray.length > 0 ? (
                belifsArray.slice(0, 1).map(item => (
                    <div key={item.id} className='ourBeliefs__miniBlog'>
                        <img className={`ourBeliefs__miniBlog_prewie ${belivesInView ? 'animated' : ''}`} src={item.prewie} alt=''></img>
                        <p className={`ourBeliefs__miniBlog_title ${belivesInView ? 'animated' : ''}`}>{item.title}</p>
                        <p className={`ourBeliefs__miniBlog_article ${belivesInView ? 'animated' : ''}`}>
                            {item.article}
                        </p>
                        <Link to={'/detailBlog'} state={{ title: item.title, author: item.author }}> <button className={`ourBeliefs__miniBlog_button ${belivesInView ? 'animated' : ''}`}> See Details &rarr;</button></Link>
                        <div className='ourBeliefs__miniBlog_redCircle'></div>
                    </div>
                ))
            ) : (
                <div className='ourBeliefs__emptyList'>
                    <h3 className={`ourBeliefs__emptyList_title ${belivesInView ? 'animated' : ''}`}> Useful articles will be added soon</h3>
                </div>
            )}

        </div>
    )
}
