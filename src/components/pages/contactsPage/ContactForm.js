import React from 'react'

export const ContactForm = () => {
    return (
        <div className='contactsForm center'>
            <form className='contactsForm__form'>
                <div className='form__header'>
                    <h2 className='form__header_title'>Let’s level up your brand</h2>
                    <p className='form__header_article'>You can reach us anytime
                        <span style={{ color: '#1463FF' }}> hellosansbrothers@gmail.com</span>
                    </p>
                </div>
                <div className='form__userData'>
                    <div className='form__userData_firstName'>
                        <label className='form__userData_firstName label' for='firstName'>First name</label>
                        <input className='form__userData_firstName input' type='text' id='name' required></input>
                    </div>
                    <div className='form__userData_lastName'>
                        <label className='form__userData_lastName label' for='lastName'>Last name</label>
                        <input className='form__userData_lastName input' type='text' id='name' required></input>
                    </div>
                </div>
                <div className='form__userEmail'>
                    <label className='form__userEmail_label' for='email'>Email</label>
                    <input className='form__userEmail_input' type='email' id='email' required></input>
                </div>
                <div className='form__userPhoneNumber'>
                    <label className='form__userPhoneNumber_label' for='phoneNumber'>Phone number</label>
                    <input className='form__userPhoneNumber_input' type='number' id='phoneNumber' required></input>
                </div>
                <div className='form__userMessage'>
                    <label className='form__userMessage_label' for='message'>Message</label>
                    <input className='form__userMessage_input' type='text' id='message'></input>
                </div>
                <div className='form__submitButton'>
                    <input className='form__submitButton_input' type="submit" value="Get Started" />
                </div>
            </form>
            <img className='contactsForm__photo' src='contactsFormPicture.png'></img>
        </div>
    )
}
