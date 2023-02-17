import React, { useState, useEffect, createContext } from 'react';
import { GenerateData } from '../../../API/cohere';
import { callApi } from '../../../API/openAI';
import Button from '../../Button';
import Form from '../form/form';
import Waiting from './components/Waiting';
import FinalResult from './components/FinalResult';
import ShowAnswers from './components/ShowAnswers';
import ShowResults from './components/ShowResults';

function GenerateForms({ decisions, setDecisions }) {
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
          setAnswerValue((value) => value = `Your answer was wrong`)
        }
        setShowAnswer((answer) => !answer);
      }
    }
  }, [decisions]);

  return (
    <div className='h-[100%] w-full flex justify-center items-center flex-col '>
      <ShowAnswers answerValue={answerValue} showAnswer={showAnswer} handleNextQuestion={handleNextQuestion}/>
      <FinalResult showFinalResult={showFinalResult} correctAnswers={correctAnswers} handleEnd={handleEnd} />
      <Waiting waitingState={waitingState} />
      <ShowResults showResults={showResults} handleSubmit={handleSubmit} text={text} handleChange={handleChange} formValue={formValue} handleOpenAI={handleOpenAI} handleCohere={handleCohere}/>
    </div>
  )
}

export default GenerateForms