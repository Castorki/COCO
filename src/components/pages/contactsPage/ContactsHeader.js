import React from 'react'
import { useSelector } from 'react-redux'

export const ContactsHeader = () => {

    const contacts = useSelector(state => state.contacts)

    return (
        <div className='contactsHeader center' >
            <div className='contactsHeader__icon'>
                <h2 className='contactsHeader__icon_title'>Contact our team to find out more</h2>
                <img className='contactsHeader__icon_map' src='map.png' alt='Map'></img>
            </div>
            <div className='contactsHeader__teamContacts'>
                {contacts.map(item => (
                    <div key={item.id} className='teamContacts__item'>
                        <h3 className='teamContacts__item_title'>{item.department}</h3>
                        <p className='teamContacts__item_article'>{item.descr}</p>
                        <p className='teamContacts__item_contactInformation'>{item.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
