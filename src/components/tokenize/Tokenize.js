import React, {useState} from 'react';
import Header from '../header/Header.js';
import TokenizeForm from './TokenizeForm.js';
import DetokenizeForm from './DetokenizeForm.js';

function Tokenize({setTokenize}) {
  const handleChange = () => setTokenize((tokenize) => !tokenize)

  return (
    <div className='h-[100vh] w-[100%] bg-black flex items-center flex-col'>
      <Header title={'Tokenize'} />
      <div className='h-full w-full flex flex-row items-center mobile-form'>
        <TokenizeForm /> 
        <DetokenizeForm />
      </div>
      <button onClick={handleChange}>go back</button>
    </div>
  )
}

export default Tokenize