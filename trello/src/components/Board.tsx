import React from 'react'

function Board() {
  return (
    <div className='m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]'>
        <div className='m-auto'>
            <button className='h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg border-2'>Add Column</button>
        </div>
    </div>
  )
}

export default Board;
