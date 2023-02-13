import React from 'react'

function Header({title}) {
  return (
    <div id='header' className='h-[60px] border-[rgb(158,197,255)] w-full flex border-b-[1px]'>
        <div id='headerTitle' className='flex flex-row text-white w-[100%] h-full ml-20 items-center p-[5px]'>
            <h1 className='text-[2rem] title'>{title}</h1>
        </div>
    </div>
  )
}

export default Header