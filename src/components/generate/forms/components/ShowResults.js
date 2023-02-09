import React from 'react';
import Form from '../../form/form';

export default function ShowResults({ showResults, handleSubmit, text, handleChange, formValue, handleOpenAI, handleCohere }) {
    if (showResults) {
        return (
            <Form handleSubmit={handleSubmit} text={text.text} handleChange={handleChange} showResults={showResults} formValue={formValue} handleOpenAI={handleOpenAI} handleCohere={handleCohere} />
        )
    } else {
        return (
            <Form handleSubmit={handleSubmit} text={text.text} handleChange={handleChange} formValue={formValue} />
        )
    }

}
