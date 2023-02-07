import React from 'react';
import Header from '../header/Header';
import Button from '../Button';
import GenerateForm from './form/GenerateForm';

function Generate({ setGenerate }) {
    const handleChange = () => setGenerate((generate) => !generate);
    
    return (
        <div className='h-[100vh] w-[100%] bg-black flex items-center flex-col'>
            <Header title={'Co:here or Open AI?'} />
            <div className='h-full w-full flex flex-col items-center'>
                <div className='w-[80%] h-[70px] flex items-center justify-start m-[20px] ml-[0px]'>
                    <Button handleChange={handleChange} title={'come back'} />
                </div>
                <GenerateForm />
            </div>
        </div>
    )
}

export default Generate