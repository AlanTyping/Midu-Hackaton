import { useEffect, useState } from "react";
import { tokenizeData } from "../../API/cohere";
import { handleCopy } from "../../utilities/functions";

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

  return (
    <form onSubmit={handleSubmit} className='h-[70%] w-full flex flex-col items-center'>
      <label>Insert Text</label><br />
      <input type="text" name="text" onChange={handleChange} className="text-stone-800" /><br />
      <label>Result</label>
      <textarea type="text" name="token" autoComplete="off" spellCheck="false" value={formValue} rows="3" className="text-stone-800 resize-none" readOnly/>
      <button type='submit'>Submit</button>
      <button onClick={handleCopy(formValue, setCopied)}>Copiar al portapapeles</button>
      {copied && <p>Texto copiado</p>}
    </form>
  )
}

export default TokenizeForm