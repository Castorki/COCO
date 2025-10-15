import React from 'react'
import './ContactsStyles.css'
import { ContactsHeader } from './ContactsHeader'
import { Partners } from '../mainPage/Partners'
import { ContactForm } from './ContactForm'

export const ContactsPage = () => {
    return (
        <div id='contacts'>
            <ContactsHeader />
            <Partners />
            <ContactForm />
        </div>
    )
}
