import React, {useContext} from 'react';
import Button from '../../Button';
import { Context } from '../../../App';

function Card({title, description}) {
  const [{ setTokenize }, { setGenerate }] = useContext(Context)
  const handleChange = () => {
    if (title === 'Tokenize') {setTokenize((tokenize) => !tokenize)};
    if (title === 'Co:here or Open AI?') {setGenerate((generate) => !generate)}
  };  
    
  return (
    <div className='h-[100%] w-[100%] flex flex-col justify-center items-center'>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <Button handleChange={handleChange} title={'open'} />
    </div>
  )
}

export default Card