import React from 'react'
import './ContactsStyles.css'
import { ContactsHeader } from './ContactsHeader'
import { Partners } from '../mainPage/Partners'

export const ContactsPage = () => {
    return (
        <div id='contacts'>
            <ContactsHeader />
            <Partners />
        </div>
    )
}
