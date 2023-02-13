import React, {useContext} from 'react';
import Button from '../Button';
import { Context } from '../../App';

const className = 'card-button absolute bottom-2 hover:bg-[rgb(15,35,73)] barlow-family' 

function Card({title, description}) {
  const [{ setTokenize }, { setGenerate }] = useContext(Context)
  const handleChange = () => {
    if (title === 'Tokenize') {setTokenize((tokenize) => !tokenize)};
    if (title === 'Co:here or Open AI?') {setGenerate((generate) => !generate)}
  };  
    
  return (
    <div className='h-[100%] w-[100%] flex flex-col justify-center items-center card'>
        <h1 className='text-[1.5rem] flex items-center w-full justify-center absolute top-7 bg-blue-600 barlow-family' >{title}</h1>
        <h3 id='card-description' className='text-[1.1rem] flex items-center justify-center p-[20px] barlow-family'  >{description}</h3>
        <Button className={className} handleChange={handleChange} title={'open'} />
    </div>
  )
}

export default Card