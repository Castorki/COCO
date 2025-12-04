import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

export const FrequantlyQuestions = () => {


    const questions = useSelector(state => state.questions);
    const [openIndex, setOpenIndex] = useState(null);

    const { ref: frequantlyQuestionsRef, inView: frequantlyQuestionsInView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div ref={frequantlyQuestionsRef} className='frequantlyQuestions center'>
            <div className='frequantlyQuestions__header'>
                <h2 className={`frequantlyQuestions__header_title ${frequantlyQuestionsInView ? 'animated' : ''}`}>Frequently asked questions</h2>
                <p className={`frequantlyQuestions__header_article ${frequantlyQuestionsInView ? 'animated' : ''}`}>Everything you need to know about the product and billing.</p>
            </div>
            {questions.map((question, index) => (
                <div key={question.id} className={`frequantlyQuestions__question ${frequantlyQuestionsInView ? 'animated' : ''}`}
                    style={{
                        '--delay': `${(index + 1.5) * 0.4}s`
                    }}>
                    <h3 className='frequantlyQuestions__question_title'>{question.title}</h3>
                    <p className={`frequantlyQuestions__question_article ${openIndex === index ? 'open' : ''}`}>
                        {question.article}
                    </p>
                    <button className='frequantlyQuestions__question_button'
                        onClick={() => toggleItem(index)}>
                        <img src={openIndex === index ? `frequantlyQuestionButtonOpen.svg` : `frequantlyQuestionButtonClose.svg`} alt=''></img>
                    </button>
                </div>

            ))
            }
        </div >
    )
}
