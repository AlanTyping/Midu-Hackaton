import { useEffect, useState } from "react";
import { tokenizeData } from "../../API/cohere";

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

  const handleSubmit = (e) => {
    tokenizeData(text, setFormValue);
    e.preventDefault();
  };

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
    <div className="h-[70%] w-full flex flex-col justify-center items-center bg-green-800">
      <form onSubmit={handleSubmit} className='h-[400px] w-[50%] min-w-[300px] flex flex-col justify-center items-center bg-blue-800'>
        <label>Insert Text</label><br />
        <input type="text" name="text" onChange={handleChange} className="text-stone-800" /><br />
        <label>Result</label>
        <textarea type="text" name="token" autoComplete="off" spellCheck="false" value={formValue} rows="3" className="text-stone-800 resize-none" readOnly />
        <button type='submit'>Submit</button>
        <button onClick={handleCopy}>Copiar al portapapeles</button>
        {copied && <p>Texto copiado</p>}
      </form>
    </div>
  )
}

export default TokenizeForm