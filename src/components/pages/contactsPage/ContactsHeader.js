import React from 'react'
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

export const ContactsHeader = () => {

    const contacts = useSelector(state => state.contacts);

    const { ref: contactsHeadRef, inView: contactsHeadInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    return (
        <div ref={contactsHeadRef} className='contactsHeader center' >
            <div className='contactsHeader__icon'>
                <h2 className={`contactsHeader__icon_title ${contactsHeadInView ? 'animated' : ''}`}>Contact our team to find out more</h2>
                <img className={`contactsHeader__icon_map ${contactsHeadInView ? 'animated' : ''}`} src='map.png' alt='Map'></img>
            </div>
            <div className='contactsHeader__teamContacts'>
                {contacts.map((item, index) => (
                    <div key={item.id} className={`teamContacts__item ${contactsHeadInView ? 'animated' : ''}`}
                        style={{
                            '--delay': `${index * 0.4}s`
                        }}>
                        <h3 className='teamContacts__item_title'>{item.department}</h3>
                        <p className='teamContacts__item_article'>{item.descr}</p>
                        <p className='teamContacts__item_contactInformation'>{item.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
