import React, { useState } from 'react'
import { closestCenter, DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import User from './components/User';

function App() {
  const [people,setPeople] = useState([
    {name:'Jhon', id: 1},
    {name:'Juan', id: 2},
    {name:'Julieth', id: 3},
    {name:'Mauricio', id: 4},
  ]);

  const handleDragEnd = ()=>{

  }

  return (
    <DndContext 
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}

    >
      <h1 className='text-4xl font-bold'>Trello clone</h1>
      <SortableContext 
        items={people}
        strategy={verticalListSortingStrategy}
      >
        {/* component */}
        {
          people.map((user)=>(
            <User user={user}/>
          ))
        }
      </SortableContext>
    
    </DndContext>
  )
}

export default App;
