import { useEffect, useState } from "react";
import { detokenizeData } from "../../API/cohere";

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

    return (
        <form onSubmit={handleSubmit} className='h-[70%] w-full flex flex-col items-center'>
            <label>Insert Text</label><br />
            <input type="text" name="text" onChange={handleChange} className="text-stone-800" /><br />
            <label>Result</label>
            <textarea type="text" name="token" autoComplete="off" spellCheck="false" value={formValue} rows="3" className="text-stone-800 resize-none" readOnly />
            <button type='submit'>Submit</button>
            <button onClick={handleCopy}>Copiar al portapapeles</button>
            {copied && <p>Texto copiado</p>}
        </form>
    )
}

export default DetokenizeForm