import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const ContactForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [emptyField, setEmptyField] = useState(false);
    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPhonenumber, setWrongPhonenumber] = useState(false);
    const [requestError, setRequestError] = useState(null);

    const { ref: contactsFormRef, inView: contactsFormInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+1',
        phone: '',
        message: ''
    });

    const checkValidity = () => {

        for (let key in formData) {
            if (key !== 'message' && formData[key] === '') {
                setEmptyField(true);
                setTimeout(() => setEmptyField(false), 3000);
                return -1;
            }
        }

        if (!formData.email.includes('@')) {
            setWrongEmail(true);
            setTimeout(() => setWrongEmail(false), 3000);
            return -1;
        } else if (formData.phone.length < 10) {
            setWrongPhonenumber(true);
            setTimeout(() => setWrongPhonenumber(false), 3000);
            return -1;
        }

        return 1;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let checkData = checkValidity();

        if (checkData < 0) {
            return
        }

        const response = true

        try {

            setIsLoading(true);
            // const response = await fetch('',
            //     {
            //         method: 'POST',
            //         body: JSON.stringify(formData),
            //         headers: {
            //             authorization: 'Bearer 84acf9d70ac605967bb1e555a09c04dc5ef7b083002d5e3992b6b78ba46ea8a3',
            //             'Content-Type': 'application/json'
            //         }
            //     })


            if (response) {
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
                setFormData({ firstName: '', lastName: '', email: '', countryCode: '+1', phone: '', message: '' });
            } else {
                setRequestError(true);
                setTimeout(() => setRequestError(false), 3000);
                return `Error ${response.status}: ${response.statusText || 'No status text'}`
            }

        } catch (error) {
            console.error('Ошибка:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === 'phone') {
            const numbersOnly = value.replace(/\D/g, '');
            setFormData(prev => ({
                ...prev,
                [name]: numbersOnly
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    }

    return (
        <div ref={contactsFormRef} className='contactsForm center'>
            <form className={`contactsForm__form ${contactsFormInView ? 'animated' : ''}`} noValidate onSubmit={handleSubmit}>
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
                            value={formData.firstName}
                            onChange={handleChange}
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
                            value={formData.lastName}
                            onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                            onChange={handleChange}
                            value={formData.countryCode}
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
                            value={formData.phone}
                            onChange={handleChange}
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
                        onChange={handleChange}
                        value={formData.message}
                    />
                </div>
                <button className='form__submitButton' type='submit' >
                    Get Started
                </button>
            </form>
            {isLoading && (
                <div className='loading'>
                    Данные отправляются на сервер. Это может занять какое-то время...
                </div>
            )}
            {showSuccess && (
                <div className="success">
                    Заявка успешно оформлена! Дальниешие инструкции будут отправлены вам на почту.
                </div>
            )}
            {wrongEmail && (
                <div className="wrongEmail">
                    Неккоректный адрес электроной почты!
                </div>
            )}
            {wrongPhonenumber && (
                <div className="wrongPhonenumber">
                    Неккоректный телефонный номер!
                </div>
            )}
            {emptyField && (
                <div className="emptyField">
                    Не все поля были заполнены!
                </div>
            )}
            {requestError && (
                <div className="requestError">
                    Что-то пошло не так. Попробуйте ещё раз позже или обратитесь в тех. поддержку.
                </div>
            )}
            <div className='contactsForm__wrapper'>
                <img className={`contactsForm__wrapper_photo ${contactsFormInView ? 'animated' : ''}`} src='contactsFormPicture.png' alt=''></img>
            </div>
        </div>
    )
}
