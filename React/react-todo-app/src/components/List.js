import React from 'react'

const List = React.memo(({
    id, title, isCompleted, todoData, setTodoData, provided, snapshot
}) => {
  console.log('List Component')

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

  return (
    <div>
        <div key={id} {...provided.draggableProps} ref = {provided.innerRef} {...provided.dragHandleProps}
                className={`${snapshot.isDragging ? "bg-gray-400" : " bg-gray-100"} flex items-center justify-between px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
                    <div className='items-center'>
                      <input 
                        type= "checkbox" 
                        onChange={() => handleCompleteChange(id)}
                        defaultChecked={isCompleted}
                        />
                    <span className={isCompleted ? 'line-through' : undefined}> {title} </span> 
                    </div>
                    <div>
                      <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>X</button>
                        </div>
                  </div>
    </div>
  )
})

export default List