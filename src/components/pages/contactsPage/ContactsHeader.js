import React from 'react'

export const ContactsHeader = () => {
    return (
        <div className='contactsHeader center' >
            <div className='contactsHeader__icon'>
                <h2 className='contactsHeader__icon_title'>Contact our team to find out more</h2>
                <img className='contactsHeader__icon_map' src='map.png' alt='Map'></img>
            </div>
            <div className='contactsHeader__teamContacts center'>
                <div className='teamContacts__item'>
                    <h3 className='teamContacts__item_title'>Support</h3>
                    <p className='teamContacts__item_article'>Our friendly team is here to help.</p>
                    <button className='teamContacts__item_contactInformation'>support@sans.com</button>
                </div>
                <div className='teamContacts__item'>
                    <h3 className='teamContacts__item_title'>Sales</h3>
                    <p className='teamContacts__item_article'>Questions or queries? Get in touch!</p>
                    <button className='teamContacts__item_contactInformation'>sales@sans.com</button>
                </div>
                <div className='teamContacts__item'>
                    <h3 className='teamContacts__item_title'>Phone</h3>
                    <p className='teamContacts__item_article'>Mon-Fri from 8am to 5pm.</p>
                    <button className='teamContacts__item_contactInformation'>+1 (435) 345-7655</button>
                </div>
            </div>
        </div>
    )
}
