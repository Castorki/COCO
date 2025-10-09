import React from 'react'

export const Rewies = () => {
    return (
        <div className='rewies center'>
            <div className='rewies__header'>
                <h2 className='rewies__header_title'>What our customer are saying</h2>
                <p className='rewies__header_article'>We are trusted numerous companies from different business to meet their needs</p>
            </div>
            <div className='rewies__watermarkWrapper'>
                <img className='rewies__watermarkWrapper_watermark' src='rewieWatermark.svg' alt='Rewie watermark'></img>
            </div>
            <div className='rewies__rewieWrapper'>
                <img className='rewies__rewieWrapper_rating' src='rating.svg' alt='rating'></img>
                <h2 className='rewies__rewieWrapper_rewieText'>
                    “With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”
                </h2>
                <div className='rewies__rewieWrapper_footer'>
                    <div className='rewies__rewieWrapper_footer_author'>
                        <img className='rewies__rewieWrapper_footer_author_authorImeg' src='authorImeg.svg' alt='Avatar'></img>
                        <div className='rewies__rewieWrapper_footer_author_authorInfo'>
                            <p className='rewies__rewieWrapper_footer_author_authorInfo_name' >Renee Wells</p>
                            <p className='rewies__rewieWrapper_footer_author_authorInfo_position'>Product Designer, Quotient</p>
                        </div>
                    </div>

                    <div className='rewies__rewieWrapper_footer_buttonWrapper'>
                        <button className='rewies__rewieWrapper_footer_buttonWrapper_button left'>
                            <img src='rewieNavLeft.svg' alt='left'></img>
                        </button>
                        <button className='rewies__rewieWrapper_footer_buttonWrapper_button right'>
                            <img src='rewieNavRight.svg' alt='right'></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
