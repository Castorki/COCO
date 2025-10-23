import React from 'react'
import { useSelector } from 'react-redux';


export const FullArticle = ({ title }) => {

    const fullArticles = useSelector(state => state.fullArticles);
    const serchdArticle = fullArticles.filter(item => item.title === title);


    return (
        <div className='fullArticle center'>
            {serchdArticle.length > 0 ? (
                serchdArticle.map(item => (
                    <>
                        <h1 className='fullArticle__title'>{item.title}</h1>
                        <div className='fullArticle__author'>
                            <div className='fullArticle__author_name'>
                                <img className='fullArticle__author_name avatar' src={item.authorAvatar} alt=''></img>
                                <h4 className='fullArticle__author_name moniker'>{item.author}</h4>
                                <p className='fullArticle__author_name jobTitle'>{item.jobTitle} </p>
                            </div>
                            <p className='fullArticle__author_publishDate'>{item.dateOfPublish}</p>
                        </div>
                        <img className='fullArticle__photo' src={item.photo} alt=''></img>
                        <p className='fullArticle__preface'>
                            {item.preface}
                        </p>
                        <h2 className='fullArticle__subtitle'>{item.subtitle}</h2>
                        <p className='fullArticle__text'>
                            {item.text}
                        </p>
                    </>
                ))
            ): (
                <div className='fullArticle__noArticle'>
                    <h2 className='fullArticle__noArticle_title'>An article was not found. Please, try again later or contac a support team</h2>
                </div>
            )}
        </div>
    )
}
