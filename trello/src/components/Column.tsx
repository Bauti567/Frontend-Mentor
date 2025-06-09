import React from 'react'
import DragC from './DragC';

interface Props {
    content: {
        title: string
    }   
}


function Column({ content }: Props) {
  return (
    <div>
        <DragC content='First Column'></DragC>
    </div>
  )
}

export default Column;
