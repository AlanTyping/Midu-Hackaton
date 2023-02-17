import { useEffect, useState } from "react";
import { tokenizeData } from "../../API/cohere";
import Form from "./Form";

function TokenizeForm() {
  const [text, setText] = useState({ text: '' });
  const [formValue, setFormValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    })
  }

  const object = {
    title: 'Insert Text',
    description: 'Text to tokens',
    placeholder: 'write some text...'
  }

  const handleCopy = (e) => {
    try {
      navigator.clipboard.writeText(formValue);
      setCopied(true);
    } catch (err) {
      console.error('Error al copiar texto: ', err);
    }
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    tokenizeData(text, setFormValue);
    if (text.text.trim() === '') {
      alert('Input field cannot be empty');
      e.preventDefault();
      return;
    }
    e.preventDefault();
  };

  return (
    <div className="flex w-[50%] h-[70%] justify-center items-center form-container">
      <Form text={object} handleChange={handleChange} handleSubmit={handleSubmit} formValue={formValue} handleCopy={handleCopy} copied={copied} />
    </div>
  )
}

export default TokenizeForm