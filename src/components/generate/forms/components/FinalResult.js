import React from 'react';
import Button from '../../../Button';

export default function FinalResult({ showFinalResult, correctAnswers, handleEnd}) {
    const className = 'hover:bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)] results-button';

    if (showFinalResult) {
        return (
            <div className='h-[100vh] absolute top-0 w-[100vw] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center'>
                <h3 id='results-info'>made {correctAnswers}/6</h3>
                <h2 id='results-results'>{(correctAnswers > 3) ? `Congratulations, you win!` : `game over`}</h2>
                <Button title={'finish'} handleChange={handleEnd} className={className} />
            </div>
        )
    }
};