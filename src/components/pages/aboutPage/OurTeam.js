import React from 'react';
import { Link } from 'react-router-dom';

export const OurTeam = () => {
    return (
        <div className='ourTeam center'>
            <div className='ourTeam__header'>
                <h2 className='ourTeam__header_title'>Meet our team of creators, designers, and world-class problem solvers</h2>
                <p className='ourTeam__header_article'>To become the company that customers want, it takes a group of passionate people. Get to know the people who lead</p>
                <div className='ourTeam__header_greenCircle'></div>
            </div>
            <ul className='ourTeam__list'>
                <div className='ourTeam__list_buttonWraper'>
                    <img className='ourTeam__buttonWraper_arrows' src='newsArrows.svg' alt='Team list navigation'></img>
                    <button className='ourTeam__buttonWraper_button left'></button>
                    <button className='ourTeam__buttonWraper_button right'></button>
                </div>
                <div className='ourTeam__item'>
                    <img className='ourTeam__item_photo' src='ArlynePhoto.png' alt='Emploee photo'></img>
                    <div className='ourTeam__item_personalDate'>
                        <div className='ourTeam__personalDate'>
                            <p className='ourTeam__personalDate_name'>Arlyne Stefano</p>
                            <p className='ourTeam__personalDate_jobTitle'>Founder & CEO</p>
                        </div>
                        <div className='ourTeam__personalDate_socialMedia'>
                            <Link to={'https://x.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='tweeterIcon.svg' alt='Tweetwr link'></img></Link>
                            <Link to={'https://www.linkedin.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='linkedinIcon.svg' alt='Linked In link'></img></Link>
                            <Link to={'https://www.instagram.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='instagramIcon.svg' alt='Instagramlink'></img></Link>
                        </div>
                    </div>
                </div>
                <div className='ourTeam__item'>
                    <img className='ourTeam__item_photo' src='KatyPhoto.png' alt='Emploee photo'></img>
                    <div className='ourTeam__item_personalDate'>
                        <div className='ourTeam__personalDate'>
                            <p className='ourTeam__personalDate_name'>Katy Cristy</p>
                            <p className='ourTeam__personalDate_jobTitle'>Chief Technology Officer</p>
                        </div>
                        <div className='ourTeam__personalDate_socialMedia'>
                            <Link to={'https://x.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='tweeterIcon.svg' alt='Tweetwr link'></img></Link>
                            <Link to={'https://www.linkedin.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='linkedinIcon.svg' alt='Linked In link'></img></Link>
                            <Link to={'https://www.instagram.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='instagramIcon.svg' alt='Instagramlink'></img></Link>
                        </div>
                    </div>
                </div>
                <div className='ourTeam__item'>
                    <img className='ourTeam__item_photo' src='RogerPhoto.png' alt='Emploee photo'></img>
                    <div className='ourTeam__item_personalDate'>
                        <div className='ourTeam__personalDate'>
                            <p className='ourTeam__personalDate_name'>Roger Dzawin</p>
                            <p className='ourTeam__personalDate_jobTitle'>Chief Technology Officer</p>
                        </div>
                        <div className='ourTeam__personalDate_socialMedia'>
                            <Link to={'https://x.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='tweeterIcon.svg' alt='Tweetwr link'></img></Link>
                            <Link to={'https://www.linkedin.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='linkedinIcon.svg' alt='Linked In link'></img></Link>
                            <Link to={'https://www.instagram.com/'} id='personalSocialMediaIcon'><img id='personalSocialMediaIcon' src='instagramIcon.svg' alt='Instagramlink'></img></Link>
                        </div>
                    </div>
                </div>
            </ul>
            <div className='ourTeam__footer'>
                <h2 className='ourTeam__footer_title'>Join our team, The one with the master touch</h2>
                <p className='ourTeam__footer_article'>We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.</p>
                <p className='ourTeam__footer_otherOptions'>See Open Position &rarr;</p>
            </div>
        </div>
    )
}
