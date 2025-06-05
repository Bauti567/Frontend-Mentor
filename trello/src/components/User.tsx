import React from 'react'
import { useSortable } from '@dnd-kit/sortable'


function User({user}) {
    const {attributes,listeners,setNodeRef,transform,transition} = useSortable({
        id: user.id
    })

    const style = {
        transform: CSS
    }
    return (
    <div
        style={}
        ref = {setNodeRef}
        {...attributes}
        {...listeners}
        className='bg-amber-400 p-4 rounded-md shadow-md my-2'>
        <h1>{user.name}</h1>
        <p>{user.id}</p>
    </div>
  )
}

export default User