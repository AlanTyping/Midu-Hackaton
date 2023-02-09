import React from 'react'

export default function Waiting({waitingState}) {
  if (waitingState) {
    return (
        <div className='h-[100vh] waiting text-[2rem] absolute top-0 w-[100vw] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center'>
          <h3>Waiting for data</h3>
          <h4 className='mb-[20px]'>Estimated time: 10 seconds{` :')`}</h4>
          <img className='h-[200px] w-[300px] cover' src='https://media.giphy.com/media/W2zHeb2KFvtXugWbJc/giphy-downsized-large.gif'></img>
        </div>
    )
  }
}
