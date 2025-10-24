import React, { useState } from 'react'

export const Prewie = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [wrongEmail, setWrongEmail] = useState(false)
    const [requestError, setRequestError] = useState(null);
    const [email, setEmail] = useState('');


    const hendleSubmit = async (e) => {
        e.preventDefault();

        if (email === '' || !email.includes('@')) {
            setWrongEmail(true);
            setTimeout(() => {
                setWrongEmail(false)
            }, 3000);
            setEmail('');
            return
        }

        const userDate = {  //Перечень данных необходимых для отправки не является окончательным!! 
            id: 197601,      //Продиктовано сугубо требованиями используемого API
            user_id: 7752931,
            title: "Test",
            body: email
        }

        try {

            setIsLoading(true);

            const response = await fetch('https://gorest.co.in/public/v2/users/8194365/posts', {
                method: 'POST',
                body: JSON.stringify(userDate),

                headers: {
                    authorization: 'Bearer 84acf9d70ac605967bb1e555a09c04dc5ef7b083002d5e3992b6b78ba46ea8a3',
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
            } else {
                setRequestError(true);
                setTimeout(() => setRequestError(false), 3000);
                return `Error ${response.status}: ${response.statusText || 'No status text'}`
            }
        } catch (error) {
            console.error('Ошибка:', error);
        } finally {
            setEmail('');
            setIsLoading(false);
        }
    }

    const hendleChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className='prewie center'>
            <div className='prewie__info'>
                <div className='prewie__info_redCircle'></div>
                <h2 className='prewie__info_header'>Digitally forward creative</h2>
                <p className='prewie__info_slogan'>
                    When it comes to interactive marketing, we've got you covered.
                    Be where the world is going</p>

                <form className='prewie__info_buttonWrapper' noValidate onSubmit={hendleSubmit}>
                    <input className='prewie__info_buttonWrapper_email'
                        placeholder='Enter your email'
                        type='email'
                        id='info_email'
                        value={email}
                        onChange={hendleChange}
                    >
                    </input>
                    <button type='submit' className='prewie__info_buttonWrapper_button'
                    >
                        Try for free
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
                        Неккоректный формат данных!
                    </div>
                )}
                {requestError && (
                    <div className="requestError">
                        Что-то пошло не так. Попробуйте ещё раз позже или обратитесь в тех. поддержку.
                    </div>
                )}
            </div>
            <div className='prewie__graphics'>
                <div className='prewie__graphics_greenCircle' ></div>
                <img className='prewie__graphics_sales' src='sales.png' alt='sales'></img>
                <img className='prewie__graphics_customerGrowth' src='customerGrowth.png' alt='Customer Growth'></img>
                <img className='prewie__graphics_statistic' src='statistic.png' alt='statistic'></img>
            </div>
        </div>
    )

}
