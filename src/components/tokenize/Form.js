import React from 'react';

function Form({ handleSubmit, handleChange, formValue, text }) {
    return (
        <form onSubmit={handleSubmit} className='form h-[350px] relative w-[500px] rounded flex justify-center items-center flex-col'>
            <label className='form-title'>{text.title}</label>
            <input type="text" name="text" placeholder={text.placeholder} onChange={handleChange} className="text-white m-[5px] rounded-[10px] h-[50px] w-[80%] bg-[rgba(197,158,255,0.2)] p-[10px] border-2 border-[rgb(197,158,255)]" /><br />
            <label className='form-description'>{text.description}</label>
            <textarea type="text" name="token" autoComplete="off" spellCheck="false" value={formValue} rows="3" 
            className="text-white rounded-[15px] bg-[rgba(197,158,255,0.2)] p-[10px] m-[5px] border-2 border-[rgb(197,158,255)] resize-none w-[90%] h-[50%]" readOnly />
            <button type='submit' className='h-[40px] hover:bg-[rgba(197,158,255,0.2)] rounded-[5px] w-[100px] border-[2px] border-[rgb(197,158,255)] m-[5px]'>Submit</button>
        </form>
    )
}

export default Form