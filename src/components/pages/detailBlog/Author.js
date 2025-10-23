import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Author = ({ authorName }) => {

    const authors = useSelector(state => state.authors);
    const serchdAuthor = authors.filter(item => item.authorName === authorName)

    return (
        <div className='author center'>
            {serchdAuthor.length > 0 ? (
                serchdAuthor.map(item => (
                    <>
                        <img className='author__photo' src={item.authorPhoto} alt=''></img>
                        <div key={item.id} className='author__info'>
                            <div className='author__info_share'>
                                {item.authorSocialMedia.map(socialItem => (
                                    <Link
                                        key={socialItem.link}
                                        to={socialItem.link}
                                        className='share-icon'
                                    >
                                        <img
                                            src={socialItem.icon}
                                            alt=''
                                            className='share-icon'
                                        />
                                    </Link>
                                ))}
                                <p className='info__share_text'>Share this article</p>
                            </div>
                            <p className='author__info_text'>Written by</p>
                            <p className='author__info_name'>{item.authorName}</p>
                            <p className='author__info_text'>{item.authorJobTitle}</p>
                            <p className='author__info_description'>{item.authorDescr}.</p>
                        </div>
                    </>
                ))
            ) : (
                <h3 className='author__noAuthor_title'>Sorry, but there is no information about author</h3>
            )}
        </div>
    )
}
