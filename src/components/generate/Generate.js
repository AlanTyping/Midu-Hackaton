import React, {useState} from 'react';
import Header from '../header/Header';
import Button from '../Button';
import GenerateForm from './forms/GenerateForm';

function Generate({ setGenerate }) {
    const handleChange = () => setGenerate((generate) => !generate);
    const className = 'hover:bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)]'
    const [decisions, setDecisions] = useState(0);
    
    return (
        <div className='h-[100vh] w-[100%] bg-black flex items-center flex-col'>
            <Header title={'Co:here or Open AI?'} />
            <div className='h-[100vh] w-full flex flex-col items-center'>
                <div className='w-[80%] h-[70px] relative flex items-center justify-start m-[20px] ml-[0px]'>
                    <Button handleChange={handleChange} title={'come back'} className={className} />
                    <span className='absolute right-5 text-[1.3rem]'>answer: {decisions}/6</span>
                </div>
                <GenerateForm decisions={decisions} setDecisions={setDecisions} />
            </div>
        </div>
    )
}

export default Generate