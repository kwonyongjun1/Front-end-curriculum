import React from 'react'
import List from './List'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"


const Lists = React.memo(({todoData, setTodoData}) => {
  console.log('Lists Component')

      const handleEnd = (result) => {
        if(!result) return;

        const newTodoData = todoData;

        const [reorderItem] = newTodoData.splice(result.source.index,1);

        newTodoData.splice(result.destination.index,0,reorderItem);
        setTodoData(newTodoData);
      }
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided)=>(
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data, index) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot)=>(
                    <List
                     key = {data.id} 
                     id= {data.id}
                     title = {data.title}
                     isCompleted={data.isCompleted}
                     setTodoData = {setTodoData}
                     todoData = {todoData}
                     provided = {provided} 
                     snapshot = {snapshot}
                     />
                  )}
              </Draggable>
              ))}
          </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>

  )
})
export default Lists;