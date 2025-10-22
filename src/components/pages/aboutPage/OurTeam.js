import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const OurTeam = () => {

    const team = useSelector(state => state.team);
    const [teamArray, setTeamArray] = useState(team);
    const teamButton = useRef(null);

    useEffect(() => {
        if (teamArray.length < 1) {
            teamButton.current.style.display = 'none'
        }
    })

    const handleSwitchLeft = (e) => {
        e.preventDefault();

        setTeamArray(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    };

    const handleSwitchRight = (e) => {
        e.preventDefault();

        setTeamArray(prev => [...prev.slice(1), prev[0]]);
    };

    return (
        <div className='ourTeam center'>
            <div className='ourTeam__header'>
                <h2 className='ourTeam__header_title'>Meet our team of creators, designers, and world-class problem solvers</h2>
                <p className='ourTeam__header_article'>To become the company that customers want, it takes a group of passionate people. Get to know the people who lead</p>
                <div className='ourTeam__header_greenCircle'></div>
            </div>
            <ul className='ourTeam__list'>
                <div ref={teamButton} className='ourTeam__list_buttonWraper'>
                    <img className='ourTeam__buttonWraper_arrows' src='newsArrows.svg' alt='Team list navigation'></img>
                    <button className='ourTeam__buttonWraper_button left' onClick={handleSwitchLeft}></button>
                    <button className='ourTeam__buttonWraper_button right' onClick={handleSwitchRight}></button>
                </div>
                {teamArray.map(item => (
                    <li key={item.id} className='ourTeam__item'>
                        <img className='ourTeam__item_photo' src={item.emploeePhoto} alt='Emploee'></img>
                        <div className='ourTeam__item_personalDate'>
                            <div className='ourTeam__personalDate'>
                                <p className='ourTeam__personalDate_name'>{item.emploeeName}</p>
                                <p className='ourTeam__personalDate_jobTitle'>{item.emploeeJobTitle}</p>
                            </div>
                            <div className='ourTeam__personalDate_socialMedia'>
                                {item.emploeeSocialMedia.map(socialItem => (
                                    <Link
                                        key={socialItem.link}
                                        to={socialItem.link}
                                        className='personalSocialMediaIcon'
                                    >
                                        <img
                                            src={socialItem.icon}
                                            alt={`${item.emploeeName} ${socialItem.icon}`}
                                            className='personalSocialMediaIcon'
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='ourTeam__footer'>
                <h2 className='ourTeam__footer_title'>Join our team, The one with the master touch</h2>
                <p className='ourTeam__footer_article'>We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.</p>
                <p className='ourTeam__footer_otherOptions'>See Open Position &rarr;</p>
            </div>
        </div>
    )
}
