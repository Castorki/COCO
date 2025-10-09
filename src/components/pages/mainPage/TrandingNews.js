import React from 'react'

export const TrandingNews = () => {
    return (
        <div className='trandingNews center'>
            <h2 className='trandingNews__title'>Trending news from Coca</h2>
            <p className='trandingNews__article'>we have some new Service to pamper you</p>
            <div className='trandingNews__wrapper'>
                <div className='trandingNews__wrapper_itemWrapper'>
                    <img className='trandingNews__wrapper_itemWrapper_img' src='authenticProfile.png' alt='Authentic profile'></img>
                    <div className='trandingNews__wrapper_itemWrapper_publishData'>
                        <p className='trandingNews__wrapper_itemWrapper_publishData_dateOfPublication'> Published in Insight Jan 30, 2021</p>
                        <p className='trandingNews__wrapper_itemWrapper_publishData_author'>by : Albert Sans</p>
                    </div>
                    <h2 className='trandingNews__wrapper_itemWrapper_title'>What makes an authentic employee profile, and why does it matter ?</h2>
                </div>
                <div className='trandingNews__wrapper_itemWrapper_nav'>
                    <img className='main__trandingNews_wrapper_itemWrapper_nav_arrows' src='newsArrows.svg' alt='news navigation'></img>
                    <button className='main__trandingNews_wrapper_itemWrapper_nav_button left'></button>
                    <button className='main__trandingNews_wrapper_itemWrapper_nav_button right'></button>
                </div>
                <div className='trandingNews__wrapper_itemWrapper'>
                    <img className='trandingNews__wrapper_itemWrapper_img' src='kaylenRalationship.png' alt='Kaylen ralationship'></img>
                    <div className='trandingNews__wrapper_itemWrapper_publishData'>
                        <p className='trandingNews__wrapper_itemWrapper_publishData_dateOfPublication'> Published in Insight Jan 30, 2021</p>
                        <p className='trandingNews__wrapper_itemWrapper_publishData_author'>by : Albert Sans</p>
                    </div>
                    <h2 className='trandingNews__wrapper_itemWrapper_title'>How to build a Kaylen relationship with a good company</h2>
                </div>
            </div>
        </div>
    )
}



