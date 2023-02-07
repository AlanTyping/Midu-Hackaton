import React, {useContext} from 'react';
import Button from '../Button';
import { Context } from '../../App';

const className = 'absolute bottom-2'

function Card({title, description}) {
  const [{ setTokenize }, { setGenerate }] = useContext(Context)
  const handleChange = () => {
    if (title === 'Tokenize') {setTokenize((tokenize) => !tokenize)};
    if (title === 'Co:here or Open AI?') {setGenerate((generate) => !generate)}
  };  
    
  return (
    <div className='h-[100%] w-[100%] flex flex-col justify-center items-center'>
        <h1 className='text-[1.5rem] flex items-center w-full justify-center absolute top-7 bg-green-700' >{title}</h1>
        <h3 className='text-[1.1rem] flex items-center justify-center p-[20px]' id='card-description' >{description}</h3>
        <Button className={className} handleChange={handleChange} title={'open'} />
    </div>
  )
}

export default Card