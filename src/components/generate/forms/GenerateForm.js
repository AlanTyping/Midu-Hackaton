import React, { useState, useEffect, createContext } from 'react';
import { GenerateData } from '../../../API/cohere';
import { callApi } from '../../../API/openAI';
import Button from '../../Button.js';
import Form from './form/form';

function GenerateForm({ decisions, setDecisions }) {
  const [waitingState, setWaitingState] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [answerValue, setAnswerValue] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userDecision, setUserDecision] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [currentCall, setCurrentCall] = useState('');
  const [text, setText] = useState({ text: '' });
  const [formValue, setFormValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    })
  }

  const randomCall = () => {
    const resultado = Math.random();
    if (resultado > 0.5) {
      setCurrentCall((call) => call = 'openAI');
      callApi(text, setFormValue, setShowResults, setWaitingState)
    }
    if (resultado < 0.5) {
      setCurrentCall((call) => call = 'co:here');
      GenerateData(text, setFormValue, setShowResults, setWaitingState);
    }
  }

  const handleSubmit = (e) => {
    randomCall();
    setWaitingState((a) => a = true);
    e.preventDefault();
  }

  const handleOpenAI = (e) => {
    setUserDecision((decision) => decision = 'openAI');
    setDecisions((decision) => decision + 1);

    e.preventDefault();
  };

  const handleCohere = (e) => {
    setUserDecision((decision) => decision = 'co:here');
    setDecisions((decision) => decision + 1);

    e.preventDefault();
  };

  const handleNextQuestion = () => {
    setFormValue((formValue) => formValue = '');
    setText({ text: '' });
    setShowAnswer((answer) => !answer);
    setShowResults((results) => !results);
    setShowFinalResult((result) => result = false);
    if (decisions === 6) setShowFinalResult((a) => !a);
  }

  const handleEnd = () => {
    setShowResults((results) => false);
    setShowFinalResult((a) => !a);
    setDecisions((a) => a = 0);
    setCorrectAnswers((a) => a = 0);
  }

  const handleCopy = (e) => {
    try {
      navigator.clipboard.writeText(formValue);
      setCopied(true);
    } catch (err) {
      console.error('Error al copiar texto: ', err);
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (decisions !== 0) {
      if (showResults) {
        if (currentCall === userDecision) {
          setCorrectAnswers((answers) => answers + 1);
          setAnswerValue((value) => value = 'Your answer was right!')
        } else {
          setAnswerValue((value) => value = `Your answer was wrong :') `)
        }
        setShowAnswer((answer) => !answer);
      }
    }
  }, [decisions]);

  const className = 'hover:bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)]';

  return (
    <div className='h-[100%] w-full flex justify-center items-center flex-col'>
      {showAnswer ? (
        <div className='h-[100vh] absolute top-0 w-[100vw] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center'>
          <h2>{answerValue}</h2>
          <Button title={'next'} handleChange={handleNextQuestion} className={className} />
        </div>)
        : ('')}

      {showFinalResult ? (<div>
        <div className='h-[100vh] absolute top-0 w-[100vw] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center'>
          <h3>{correctAnswers}/6</h3>
          <h2>{(correctAnswers > 3) ? `Congratulations, you win!` : `Game over`}</h2>
          <Button title={'finish'} handleChange={handleEnd} className={className} />
        </div>
      </div>) : ''}
      {waitingState ?
        (<div className='h-[100vh] text-[2rem] absolute top-0 w-[100vw] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center'>
          <h3>Waiting for data</h3>
          <h4>Estimated time: 10 seconds{` :')`}</h4>
          <img className='h-[200px] w-[300px] cover' src='https://media.giphy.com/media/W2zHeb2KFvtXugWbJc/giphy-downsized-large.gif'></img>
        </div>) : ''}
      {showResults ? (
        <Form handleSubmit={handleSubmit} text={text.text} handleChange={handleChange} showResults={showResults} formValue={formValue} handleOpenAI={handleOpenAI} handleCohere={handleCohere} />
      )
        :
        (<Form handleSubmit={handleSubmit} text={text.text} handleChange={handleChange} formValue={formValue} />)}
    </div>
  )
}

export default GenerateForm