import React from 'react'

function Header({title}) {
  return (
    <div className='h-[60px] bg-[rgba(158,197,255,0.2)] border-[rgb(158,197,255)] w-full flex border-b-[4px] '>
        <div className='flex flex-row text-white w-[50%] h-full ml-20 items-center'>
            <h1 className='text-[2rem] title'>{title}</h1>
        </div>
    </div>
  )
}

export default Header