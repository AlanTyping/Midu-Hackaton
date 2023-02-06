import React from 'react';
import Header from '../header/Header';
import Button from '../Button';
import GenerateForm from './form/GenerateForm';

function Generate({ setGenerate }) {
    const handleChange = () => setGenerate((generate) => !generate);
    
    return (
        <div className='h-[100vh] w-[100%] bg-black flex items-center flex-col'>
            <Header title={'Co:here or Open AI?'} />
            <div className='h-full w-full flex flex-row items-center'>
                <GenerateForm />
            </div>
            <Button handleChange={handleChange} title={'come back'} />
        </div>
    )
}

export default Generate