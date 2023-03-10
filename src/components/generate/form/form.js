import React from 'react'
import Button from '../../Button';

function Form({ handleSubmit, text, formValue, handleChange, showResults, handleCohere, handleOpenAI }) {
    const className = 'hover:bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)] generate-button';

    const textarea = 'generate-area text-white rounded-[15px] min-w-[300px] min-h-[200px] bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)] p-[10px] m-[5px] border-2  resize-none w-[50%] h-[50%]';

    const input = 'generate-input text-white min-w-[300px] rounded-[10px] bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)] p-[10px] m-[5px] border-2 w-[40%]';

    return (
        <div className='h-[100%] w-[80%] flex flex-col justify-center items-center'>
            {showResults ? (
                <form onSubmit={handleSubmit} className='h-[100%] w-[100%] flex flex-col items-center'>
                    <label className='form-title'>Insert Text</label>
                    <input autoComplete="off" type="text" name="text" value={text} onChange={handleChange} className={input} /><br />
                    <label className='form-description'>Result</label>
                    <textarea type="text" name="token" autoComplete="off" spellCheck="false" value={formValue} rows="3"
                        className={textarea} readOnly />
                    <div className='flex flex-col justify-center items-center alr w-full'>
                        <h3 id='answer-question' >What AI is been used?</h3>
                        <div className='flex justify row m-3'>
                            <div>
                                <Button title={'Co:here'} handleChange={handleCohere} className={className} />
                            </div>
                            <div>
                                <Button title={'OpenAI'} handleChange={handleOpenAI} className={className} />
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleSubmit} className='h-[100%] w-[80%] flex flex-col items-center '>
                    <label className='form-title'>Insert Text</label>
                    <input autoComplete="off" type="text" placeholder='Request something' name="text" value={text} onChange={handleChange} className={input} /><br />
                    <label className='form-description'>Result</label>
                    <textarea type="text" placeholder='Cohere or openAI? Submit for the answer' name="token" autoComplete="off" spellCheck="false" value={formValue} rows="3" className={textarea} readOnly />
                    <button type='submit' className='generate-button h-[50px] w-[100px] border-[2px] hover:bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)] m-[10px]'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default Form