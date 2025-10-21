import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';

export const Rewies = () => {

    const rewiesArray = useSelector(state => state.rewies);
    const [rewies, setRewies] = useState(rewiesArray);

    const handleSwitchLeft = (e) => {
        e.preventDefault();
        setRewies(prev => [prev[[prev.length - 1]], ...prev.slice(0, -1)]);
    }

    const handleSwitchRight = (e) => {
        e.preventDefault();
        setRewies(prev => [...prev.slice(1), prev[0]]);
    }

    return (
        <div className='rewies center'>
            <div className='rewies__header'>
                <h2 className='rewies__header_title'>What our customer are saying</h2>
                <p className='rewies__header_article'>We are trusted numerous companies from different business to meet their needs</p>
            </div>
            {rewies.length > 0 ? (
                rewies.slice(0, 1).map(item => (
                    <div key={item.id} className='rewies__rewieWrapper'>
                        <div className='rewies__watermarkWrapper'>
                            <img className='rewies__watermarkWrapper_watermark' src='rewieWatermark.svg' alt='Rewie watermark'></img>
                        </div>
                        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                            <Rating
                                name="text-feedback"
                                value={item.grade}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            <Box className='rewies__rewieWrapper_rating' sx={{ ml: 2 }}>{item.grade.toFixed(1)}</Box>
                        </Box>
                        <h2 className='rewies__rewieWrapper_rewieText'>
                            {item.rewie}
                        </h2>
                        <div className='rewies__rewieWrapper_footer'>
                            <div className='rewies__rewieWrapper_footer_author'>
                                <img className='rewies__rewieWrapper_footer_author_authorImeg' src={item.authorAvatar} alt=''></img>
                                <div className='rewies__rewieWrapper_footer_author_authorInfo'>
                                    <p className='rewies__rewieWrapper_footer_author_authorInfo_name' >{item.authorName}</p>
                                    <p className='rewies__rewieWrapper_footer_author_authorInfo_position'>{item.authorJobTitle}</p>
                                </div>
                            </div>
                            <div className='rewies__rewieWrapper_footer_buttonWrapper'>
                                <button className='rewies__rewieWrapper_footer_buttonWrapper_button left'
                                    onClick={handleSwitchLeft}>
                                    <img src='rewieNavLeft.svg' alt='left'></img>
                                </button>
                                <button className='rewies__rewieWrapper_footer_buttonWrapper_button right'
                                    onClick={handleSwitchRight}>
                                    <img src='rewieNavRight.svg' alt='right'></img>
                                </button>
                            </div>
                        </div>
                    </div>
                ))) : (
                <h2 className='rewies__emptyRewies'> There are no reviews yet. Be the first.</h2>
            )
            }
        </div>
    )
}
