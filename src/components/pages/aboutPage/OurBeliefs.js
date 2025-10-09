import React from 'react'

export const OurBeliefs = () => {
    return (
        <div className='ourBeliefs center'>
            <img className='ourBeliefs__miniBlogPhoto' src='miniBlogPhoto.png' alt='Photo for mini blog'></img>
            <div className='ourBeliefs__buttonWraper'>
                <img className='ourBeliefs__buttonWraper_arrows' src='newsArrows.svg' alt='news navigation'></img>
                <button className='ourBeliefs__buttonWraper_button left'></button>
                <button className='ourBeliefs__buttonWraper_button right'></button>
            </div>
            <div className='ourBeliefs__miniBlog'>
                <img className='ourBeliefs__miniBlog_prewie' src='miniBlogPrewie.png' alt='Prewie for mini blog'></img>
                <p className='ourBeliefs__miniBlog_title'>What we believe in</p>
                <p className='ourBeliefs__miniBlog_article'>
                    Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...
                </p>
                <button className='ourBeliefs__miniBlog_button'><span className='ourBeliefs__miniBlog_button-text'> See Details &rarr;</span></button>
            <div className='ourBeliefs__miniBlog_redCircle'></div>
            </div>
        </div>
    )
}
