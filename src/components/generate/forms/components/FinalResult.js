import React from 'react';
import Button from '../../../Button';

export default function FinalResult({ showFinalResult, correctAnswers, handleEnd, className}) {
    if (showFinalResult) {
        return (
            <div className='h-[100vh] absolute top-0 w-[100vw] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center'>
                <h3>{correctAnswers}/6</h3>
                <h2>{(correctAnswers > 3) ? `Congratulations, you win!` : `Game over`}</h2>
                <Button title={'finish'} handleChange={handleEnd} className={className} />
            </div>
        )
    }
};