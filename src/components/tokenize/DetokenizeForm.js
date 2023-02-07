import { useEffect, useState } from "react";
import { detokenizeData } from "../../API/cohere";
import Form from "./Form";

function DetokenizeForm() {
    const [text, setText] = useState({ text: '' });
    const [formValue, setFormValue] = useState('');
    const [copied, setCopied] = useState(false);
    const [array, setArray] = useState();

    const handleChange = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value
        })
    }

    const toNumberArray = (string) => {
        return string.split(' ').map(e => parseInt(e))
    }

    const handleSubmit = (e) => {
        setArray((array) => array = toNumberArray(text.text));
        detokenizeData(array, setFormValue);
        e.preventDefault()
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(formValue);
            setCopied(true);
        } catch (err) {
            console.error('Error al copiar texto: ', err);
        }
    };

    const object = {
        title: 'Insert Tokens',
        description: 'Tokens to text',
        placeholder: 'Paste your tokens'
      }

    return (
        <div className="flex w-[50%] h-[70%] justify-center items-center form-container">
            <Form text={object} handleChange={handleChange} handleSubmit={handleSubmit} formValue={formValue} handleCopy={handleCopy} copied={copied} />
        </div>
    )
}

export default DetokenizeForm