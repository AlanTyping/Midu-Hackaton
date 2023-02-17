import React from 'react';
import Button from '../../../Button';

export default function ShowAnswers({answerValue, showAnswer, handleNextQuestion}) {
    const className = 'hover:bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)] generate-button';
    if (showAnswer) {
        return (
            <div id='answer' className='h-[100vh] absolute top-0 w-[100vw] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center'>
                <h2 id='answer-result'>{answerValue}</h2>
                <Button title={'next'} handleChange={handleNextQuestion} className={className} />
            </div>
        )
    }

}
