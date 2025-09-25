import React from 'react'

export const Rewies = () => {
    return (
        <div className='main__rewies center'>
            <div className='main__rewies_header'>
                <h2 className='main__rewies_header_title'>What our customer are saying</h2>
                <p className='main__rewies_header_article'>We are trusted numerous companies from different business to meet their needs</p>
            </div>
            <img className='main__rewies_watermark' src='rewieWatermark.svg' alt='Rewie watermark'></img>
            <div className='main__rewies_rewieWrapper'>
                <img className='main__rewies_rewieWrapper_rating' src='rating.svg' alt='rating'></img>
                <h2 className='main__rewies_rewieWrapper_rewieText'>
                    “With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”
                </h2>
                <div className='main__rewies_rewieWrapper_footer'>
                    <div className='main__rewies_rewieWrapper_footer_author'>
                        <img className='main__rewies_rewieWrapper_footer_author_authorImeg' src='authorImeg.svg' alt='Avatar'></img>
                        <div className='main__rewies_rewieWrapper_footer_author_authorInfo'>
                            <p className='main__rewies_rewieWrapper_footer_author_authorInfo_name' >Renee Wells</p>
                            <p className='main__rewies_rewieWrapper_footer_author_authorInfo_position'>Product Designer, Quotient</p>
                        </div>
                    </div>

                    <div className='main__rewies_rewieWrapper_footer_buttonWrapper'>
                        <button className='main__rewies_rewieWrapper_footer_buttonWrapper_button left'>
                            <img src='rewieNavLeft.svg' alt='left'></img>
                        </button>
                        <button className='main__rewies_rewieWrapper_footer_buttonWrapper_button right'>
                            <img src='rewieNavRight.svg' alt='right'></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
