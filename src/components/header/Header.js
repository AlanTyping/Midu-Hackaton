import React from 'react'

function Header({title}) {
  return (
    <div className='h-[60px] bg-[#9147ff] w-full flex border-b-[6px] border-[#c197ff]'>
        <div className='flex flex-row text-white w-[100%] h-full ml-20 items-center'>
            <h1 className='text-[2rem] title'>{title}</h1>
        </div>
    </div>
  )
}

export default Header