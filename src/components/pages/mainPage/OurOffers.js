import React from 'react'

export const OurOffers = () => {
    return (
        <div className='main__ourOffers center'>
            <h2 className='main__ourOffers_title'>
                Coca help our client solve complex customer problems with date that does more.
            </h2>
            <p className='main__ourOffers_article'>
                Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration
            </p>
            <div className='main__ourOffers_list'>
                <div className='main__ourOffers_list_listElement'>
                    <img className='main__ourOffers_list_listElement_icon' src='buildIcon.svg'></img>
                    <h3 className='main__ourOffers_list_listElement_title'>
                        Build your date fundamental
                    </h3>
                    <p className='main__ourOffers_list_listElement_article'>
                        Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.
                    </p>
                </div>
                <div className='main__ourOffers_list_listElement'>
                    <img className='main__ourOffers_list_listElement_icon' src='measureIcon.svg'></img>
                    <h3 className='main__ourOffers_list_listElement_title'>
                        Measure more effective
                    </h3>
                    <p className='main__ourOffers_list_listElement_article'>
                        Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.
                    </p>
                </div>
                <div className='main__ourOffers_list_listElement'>
                    <img className='main__ourOffers_list_listElement_icon' src='activateIcon.svg'></img>
                    <h3 className='main__ourOffers_list_listElement_title'>
                        Activate your date
                    </h3>
                    <p className='main__ourOffers_list_listElement_article'>
                        Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.
                    </p>
                </div>
                <div className='main__ourOffers_list_listElement'>
                    <img className='main__ourOffers_list_listElement_icon' src='privacyIcon.svg'></img>
                    <h3 className='main__ourOffers_list_listElement_title'>
                        Strengthen consumer privacy
                    </h3>
                    <p className='main__ourOffers_list_listElement_article'>
                        Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.
                    </p>
                </div>
            </div>
        </div>
    )
}
