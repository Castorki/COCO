import React from 'react'

export const Author = () => {
    return (
        <div className='author center'>
            <img className='author__photo' src='authorPhoto.png' alt=''></img>
            <div className='author__info'>
                <div className='author__info_share'>
                    <img className='share-icon' src='shareOnFacebook.svg' alt=''></img>
                    <img className='share-icon' src='shareOnTweeter.svg' alt=''></img>
                    <img className='share-icon' src='shareOnLinkedIn.svg' alt=''></img>
                    <img className='share-icon' src='shareOnInstagram.svg' alt=''></img>
                    <p className='info__share_text'>Share this article</p>
                </div>
                <p className='author__info_text'>Written by</p>
                <p className='author__info_name'>Renee Wells</p>
                <p className='author__info_text'>Product Designer, Quotient</p>
                <p className='author__info_description'>Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.</p>
            </div>
        </div>
    )
}
