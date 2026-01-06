import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const OurBeliefs = () => {

    const belifs = useSelector(state => state.belifs);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState('');
    const blogButton = useRef(null);
    const currentBelif = belifs[currentIndex] || belifs[0];

    const { ref: belivesRef, inView: belivesInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })


    useEffect(() => {
        if (belifs.length < 1) {
            blogButton.current.style.display = 'none'
        } else {
            blogButton.current.style.display = 'block'
        }
    })

    const handlePrev = (e) => {
        e.preventDefault();

        setTransitionClass('slide-out-right');

        setTimeout(() => {
            setCurrentIndex(prev =>
                prev === 0 ? belifs.length - 1 : prev - 1
            );

            setTransitionClass('slide-in-left');

            setTimeout(() => {
                setTransitionClass('');
            }, 500);
        }, 300);
    }

    const handleNext = (e) => {
        e.preventDefault();

        setTransitionClass('slide-out-left');

        setTimeout(() => {
            setCurrentIndex(prev =>
                prev === belifs.length - 1 ? 0 : prev + 1
            );

            setTransitionClass('slide-in-right');

            setTimeout(() => { 
                setTransitionClass('');
            }, 500)
        }, 300);
    }

    return (
        <div ref={belivesRef} className={`ourBeliefs center ${belivesInView ? 'loaded' : ''}`}>
            <img className={`ourBeliefs__miniBlogPhoto ${belivesInView ? 'animated' : ''}`} src='miniBlogPhoto.png' alt=''></img>
            <div ref={blogButton} className={`ourBeliefs__buttonWraper ${belivesInView ? 'animated' : ''}`}>
                <img className='ourBeliefs__buttonWraper_arrows' src='newsArrows.svg' alt=''></img>
                <button className='ourBeliefs__buttonWraper_button left' onClick={handlePrev}></button>
                <button className='ourBeliefs__buttonWraper_button right' onClick={handleNext}></button>
            </div>
            {belifs.length > 0 ? (
                <div key={currentBelif.id} className={`ourBeliefs__miniBlog ${transitionClass}`}>
                    <img className={`ourBeliefs__miniBlog_prewie`} src={currentBelif.prewie} alt=''></img>
                    <p className={`ourBeliefs__miniBlog_title`}>{currentBelif.title}</p>
                    <p className={`ourBeliefs__miniBlog_article`}>
                        {currentBelif.article}
                    </p>
                    <Link to={'/detailBlog'} state={{ title: currentBelif.title, author: currentBelif.author }}> <button className={`ourBeliefs__miniBlog_button`}> See Details &rarr;</button></Link>
                    <div className='ourBeliefs__miniBlog_redCircle'></div>
                </div>
            ) : (
                <div className='ourBeliefs__emptyList'>
                    <h3 className={`ourBeliefs__emptyList_title ${belivesInView ? 'animated' : ''}`}> Useful articles will be added soon</h3>
                </div>
            )}

        </div>
    )
}
