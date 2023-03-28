import React from 'react'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
export default function List({todoData, setTodoData}) {

      const handleCompleteChange = (id) =>{
        let newTodoData = todoData.map((data) =>{
          if(data.id === id){
            data.isCompleted = !data.isCompleted;
          }
          return data;
        });
        setTodoData(newTodoData);
      }
 
      const handleClick = (id) =>{
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData)
      }

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
                <div key={data.id} {...provided.draggableProps} ref = {provided.innerRef} {...provided.dragHandleProps}
                className={`${snapshot.isDragging ? "bg-gray-400" : " bg-gray-100"} flex items-center justify-between px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
                    <div className='items-center'>
                      <input 
                        type= "checkbox" 
                        onChange={() => handleCompleteChange(data.id)}
                        defaultChecked={data.isCompleted}
                        />
                    <span className={data.isCompleted ? 'line-through' : undefined}> {data.title} </span> 
                    </div>
                    <div>
                      <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>X</button>
                        </div>
                  </div>
                  )}
              </Draggable>
              ))}
          </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>

  )
}
