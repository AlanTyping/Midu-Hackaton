import React from 'react'

function Button({handleChange, title, className}) {
  return (
    <button onClick={handleChange} className={`h-[50px] w-[100px] border-[2px] border-[#c59eff] m-[5px] ${className}`}>{title}</button>
  )
}

export default Button