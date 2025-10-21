import React from 'react'

export const ContactForm = () => {
    return (
        <div className='contactsForm center'>
            <form className='contactsForm__form'>
                <div className='form__header'>
                    <h2 className='form__header_title'>Let's level up your brand</h2>
                    <p className='form__header_article'>You can reach us anytime
                        <span style={{ color: '#1463FF' }}> hellosansbrothers@gmail.com</span>
                    </p>
                </div>
                <div className='form__userData'>
                    <div className='form__userData_firstName'>
                        <label className='form__userData_firstName label' htmlFor='firstName'>First name</label>
                        <input
                            className='form__userData_firstName input'
                            type='text'
                            id='firstName'
                            name='firstName'
                            placeholder='First name'
                            required
                        />
                    </div>
                    <div className='form__userData_lastName'>
                        <label className='form__userData_firstName label' htmlFor='lastName'>Last name</label>
                        <input
                            className='form__userData_lastName input'
                            type='text'
                            id='lastName'
                            name='lastName'
                            placeholder='Last name'
                            required
                        />
                    </div>
                </div>
                <div className='form__userEmail'>
                    <label className='form__userEmail_label' htmlFor='email'>Email</label>
                    <input
                        className='form__userEmail_input'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='you@company.com'
                        required
                    />
                </div>
                <div className='form__userPhoneNumber'>
                    <label className='form__userPhoneNumber_label' htmlFor='phone'>Phone number</label>
                    <div className='form__userPhoneNumber_inputElements'>
                        <select
                            className='userPhoneNumber__inputElements_select'
                            id="countryCode"
                            name='countryCode'
                        >
                            <option className='inputElements__select_option' value="+1">US</option>
                            <option className='inputElements__select_option' value="+32">BEL</option>
                            <option className='inputElements__select_option' value="+7">RU</option>
                            <option className='inputElements__select_option' value="+44">UK</option>
                            <option className='inputElements__select_option' value="+48">POL</option>
                        </select>
                        <input
                            className='userPhoneNumber__inputElements_input'
                            type='tel'
                            id='phone'
                            name='phone'
                            placeholder='(555) 000-0000'
                            required
                        />
                    </div>
                </div>
                <div className='form__userMessage'>
                    <label className='form__userMessage_label' htmlFor='message'>Message</label>
                    <textarea
                        className='form__userMessage_textArea'
                        id='message'
                        name='message'
                        placeholder='Leave us a message...'
                    />
                </div>
                <button className='form__submitButton' type='submit'>
                    Get Started
                </button>
            </form>
            <div className='contactsForm__wrapper'>
                <img className='contactsForm__wrapper_photo' src='contactsFormPicture.png'></img>
            </div>
        </div>
    )
}
