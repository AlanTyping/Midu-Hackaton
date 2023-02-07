import React, { useState } from 'react';
import Header from '../header/Header.js';
import TokenizeForm from './TokenizeForm.js';
import DetokenizeForm from './DetokenizeForm.js';
import Button from '../Button.js';

function Tokenize({ setTokenize }) {

  const handleChange = () => setTokenize((tokenize) => !tokenize);
  const className = ' hover:bg-[rgba(197,158,255,0.2)]'

  return (
    <div className='h-[100vh] w-[100%] bg-black flex items-center flex-col tokenize'>
      <div className='w-[80%] h-[70px] flex items-center justify-start m-[20px] ml-[0px]'>
        <Button title={'home'} handleChange={handleChange} className={className} />
      </div>
      <div className='h-[100vh] w-full flex flex-row items-center container'>
        <TokenizeForm />
        <DetokenizeForm />
      </div>
    </div>
  )
}

export default Tokenize 