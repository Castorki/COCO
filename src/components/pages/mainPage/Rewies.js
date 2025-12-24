import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

export const Rewies = () => {

    const rewiesArray = useSelector(state => state.rewies);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState('');
    const currentRewie = rewiesArray[currentIndex] || rewiesArray[0];

    const { ref: rewiesRef, inView: rewiesInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        if (rewiesArray.length < 1) {
            document.querySelector('.rewies__header_watermarkWrapper').style.display = 'none';
        }else{
            document.querySelector('.rewies__header_watermarkWrapper').style.display = '';
        }
    })

    const handleNext = () => {
        setTransitionClass('slide-out-left');

        setTimeout(() => {
            setCurrentIndex(prev =>
                prev === rewiesArray.length - 1 ? 0 : prev + 1
            );
            setTransitionClass('slide-in-right');

            setTimeout(() => setTransitionClass(''), 500);
        }, 300);
    };

    const handlePrev = () => {
        setTransitionClass('slide-out-right');

        setTimeout(() => {
            setCurrentIndex(prev =>
                prev === 0 ? rewiesArray.length - 1 : prev - 1
            );
            setTransitionClass('slide-in-left');

            setTimeout(() => setTransitionClass(''), 500);
        }, 300);
    };


    return (
        <div ref={rewiesRef} className={`rewies center ${rewiesInView ? 'loaded' : ''}`}>
            <div className='rewies__header'>
                <h2 className={`rewies__header_title `}>What our customer are saying</h2>
                <p className={`rewies__header_article `}>We are trusted numerous companies from different business to meet their needs</p>
                <div className={`rewies__header_watermarkWrapper `}>
                    <img className='rewies__watermarkWrapper_watermark' src='rewieWatermark.svg' alt='Rewie watermark'></img>
                </div>
            </div>
            {rewiesArray.length > 0 ? (
                <div key={currentRewie.id} className={`rewies__rewieWrapper ${transitionClass}`}>
                    <div className={`rewies__rewieWrapper_rewie `}>
                        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                            <Rating
                                name="text-feedback"
                                value={currentRewie.grade}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            <Box className='rewies__rewieWrapper_rating' sx={{ ml: 2 }}>{currentRewie.grade.toFixed(1)}</Box>
                        </Box>
                        <h2 className='rewies__rewieWrapper_rewieText'>
                            {currentRewie.rewie}
                        </h2>
                    </div>
                    <div className='rewies__rewieWrapper_footer'>
                        <div className={`rewies__footer_author `}>
                            <img className='rewies__footer_authorImeg' src={currentRewie.authorAvatar} alt=''></img>
                            <div className='rewies___footer_authorInfo'>
                                <p className='rewies__footer_name' >{currentRewie.authorName}</p>
                                <p className='rewies__footer_position'>{currentRewie.authorJobTitle}</p>
                            </div>
                        </div>
                        <div className={`rewies__footer_buttonWrapper `}>
                            <button className='rewies__footer_button left'
                                onClick={handlePrev}>
                                <img className='rewies__button_arrow' src='rewieNavLeft.svg' alt='left'></img>
                            </button>
                            <button className='rewies__footer_button right'
                                onClick={handleNext}>
                                <img className='rewies__button_arrow' src='rewieNavRight.svg' alt='right'></img>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className={`rewies__emptyRewies `}> There are no reviews yet. Be the first.</h2>
            )
            }
        </div>
    )
}
