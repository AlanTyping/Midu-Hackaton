import React from 'react'

function Button({handleChange, title}) {
  return (
    <button onClick={handleChange} className='h-[50px] w-[100px] border-[2px] border-[#c59eff] m-[5px]'>{title}</button>
  )
}

export default Button