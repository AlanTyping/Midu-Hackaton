import React from 'react';
import Button from '../../../Button';

export default function ShowAnswers({answerValue, showAnswer, handleNextQuestion, className}) {
    if (showAnswer) {
        return (
            <div className='h-[100vh] absolute top-0 w-[100vw] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center'>
                <h2>{answerValue}</h2>
                <Button title={'next'} handleChange={handleNextQuestion} className={className} />
            </div>
        )
    }

}
