import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const OurTeam = () => {

    const team = useSelector(state => state.team);
    const teamButton = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [direction, setDirection] = useState('');

    const { ref: teamRef, inView: teamInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    useEffect(() => {
        if (team.length < 1) {
            teamButton.current.style.display = 'none'
        } else {
            teamButton.current.style.display = 'flex'

        }
    })

    const getDisplayedItems = (index) => {
        if (team.length === 0) return [];

        const items = [];
        for (let i = -1; i <= 3; i++) {
            let itemIndex = index + i;
            if (itemIndex < 0) itemIndex += team.length;
            if (itemIndex >= team.length) itemIndex -= team.length;

            items.push({
                ...team[itemIndex]
            });
        }
        return items;
    };

    useEffect(() => {
        setDisplayedItems(getDisplayedItems(currentIndex));
    }, [team, currentIndex]);

    const handleNext = () => {
        if (team.length === 0) return;

        setDirection('next');

        setCurrentIndex(prev => (prev + 1) % team.length);
    };

    const handlePrev = () => {
        if (team.length === 0) return;

        setDirection('prev');

        setCurrentIndex(prev => (prev - 1 + team.length) % team.length);
    };

    // const handleSwitchLeft = (e) => {
    //     e.preventDefault();

    //     setTeamArray(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    // };

    // const handleSwitchRight = (e) => {
    //     e.preventDefault();

    //     setTeamArray(prev => [...prev.slice(1), prev[0]]);
    // };

    return (
        <div ref={teamRef} className='ourTeam center'>
            <div className='ourTeam__header'>
                <h2 className={`ourTeam__header_title ${teamInView ? 'animated' : ''}`}>Meet our team of creators, designers, and world-class problem solvers</h2>
                <p className={`ourTeam__header_article ${teamInView ? 'animated' : ''}`}>To become the company that customers want, it takes a group of passionate people. Get to know the people who lead</p>
                <div className='ourTeam__header_greenCircle'></div>
            </div>
            <ul className='ourTeam__list'>
                <div ref={teamButton} className={`ourTeam__list_buttonWraper ${teamInView ? 'animated' : ''}`}>
                    <img className='ourTeam__buttonWraper_arrows' src='teamArrows.svg' alt='Team list navigation'></img>
                    <button className='ourTeam__buttonWraper_button left' onClick={handlePrev}></button>
                    <button className='ourTeam__buttonWraper_button right' onClick={handleNext}></button>
                </div>
                {displayedItems.map((item, index) => (
                    <li key={`item_${index} - ${item.id}`} className={`ourTeam__item ${teamInView ? 'animated' : ''} ${`item-${index}`} 
                    ${`slide-${direction}`}`}
                        style={{
                            '--delay': `${(index + 1.5) * 0.4}s`
                        }}>
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
                <h2 className={`ourTeam__footer_title ${teamInView ? 'animated' : ''}`}>Join our team, The one with the master touch</h2>
                <p className={`ourTeam__footer_article ${teamInView ? 'animated' : ''}`}>We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.</p>
                <p className={`ourTeam__footer_otherOptions ${teamInView ? 'animated' : ''}`}>See Open Position &rarr;</p>
            </div>
        </div>
    )
}
