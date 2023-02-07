import React, { useState } from 'react';
import Header from '../header/Header.js';
import TokenizeForm from './TokenizeForm.js';
import DetokenizeForm from './DetokenizeForm.js';
import Button from '../Button.js';

function Tokenize({ setTokenize }) {

  const handleChange = () => setTokenize((tokenize) => !tokenize);
  const className = 'absolute left-16 top-4 hover:bg-[rgba(197,158,255,0.2)]'

  return (
    <div className='h-[100vh] w-[100%] bg-black flex items-center flex-col'>
      <div className='w-full flex justify-start relative'>
        <Button title={'home'} handleChange={handleChange} className={className}/>
      </div>
      <div className='h-full w-full flex flex-row items-center container'>
        <TokenizeForm />
        <DetokenizeForm />
      </div>
    </div>
  )
}

export default Tokenize