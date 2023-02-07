import React, { useState } from 'react';
import copy from './copy.png';

function Form({ handleSubmit, handleChange, formValue, text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        try {
            navigator.clipboard.writeText(formValue);
            setCopied(true);
        } catch (err) {
            console.error('Error al copiar texto: ', err);
        }
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='form h-[350px] relative w-[500px] rounded flex justify-center items-center flex-col'>
            <label className='form-title'>{text.title}</label>
            <input autocomplete="off" type="text" name="text" placeholder={text.placeholder} onChange={handleChange} className="text-white m-[5px] rounded-[10px] h-[50px] w-[80%] bg-[rgba(197,158,255,0.2)] p-[10px] border-2 border-[rgb(197,158,255)]" /><br />
            <label className='form-description'>{text.description}</label>
            <textarea type="text" name="token" autoComplete="off" spellCheck="false" value={formValue} rows="3"
                className="text-white rounded-[15px] bg-[rgba(197,158,255,0.2)] p-[10px] m-[5px] border-2 border-[rgb(197,158,255)] resize-none w-[90%] h-[50%]" readOnly />
            <div className='w-[100%] relative flex flex-row items-center justify-center'>
                <button type='submit' className=' h-[40px] hover:bg-[rgba(197,158,255,0.2)] rounded-[5px] w-[100px] border-[2px] border-[rgb(197,158,255)] m-[5px]'>Submit</button>
                <img className='h-[20px] w-[20px] z-[10] absolute right-40 hover:cursor-pointer' src={copy} onClick={handleCopy}></img>
                {copied && <p className='absolute right-12'>Texto copiado</p>}
            </div>
        </form>
    )
}

export default Form