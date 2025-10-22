import React, { useState } from 'react';
import { useSelector } from 'react-redux';



export const FrequantlyQuestions = () => {


    const questions = useSelector(state => state.questions);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className='frequantlyQuestions center'>
            <div className='frequantlyQuestions__header'>
                <h2 className='frequantlyQuestions__header_title'>Frequently asked questions</h2>
                <p className='frequantlyQuestions__header_article'>Everything you need to know about the product and billing.</p>
            </div>
            {questions.map((question, index) => (
                <div key={question.id} className='frequantlyQuestions__question'>
                    <h3 className='frequantlyQuestions__question_title'>{question.title}</h3>
                    <p className={`frequantlyQuestions__question_article ${openIndex === index ? `open` : ``}`}>
                        {question.article}
                    </p>
                    <button className='frequantlyQuestions__question_button'
                        onClick={() => toggleItem(index)}>
                        <img src={openIndex === index ? `frequantlyQuestionButtonOpen.svg` : `frequantlyQuestionButtonClose.svg`} alt=''></img>
                    </button>
                </div>

            ))
            }
            {/* <div className='frequantlyQuestions__question'>
                <h3 className='frequantlyQuestions__question_title'>Is there a free trial available?</h3>
                <p className='frequantlyQuestions__question_article'>
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                </p>
                <button className='frequantlyQuestions__question_button'><img src='frequantlyQuestionButtonClose.svg'></img></button>
            </div> */}
        </div >
    )
}
