import React from 'react'

export default function List({todoData, setTodoDate}) {

      const handleCompleteChange = (id) =>{
        let newTodoData = todoData.map((data) =>{
          if(data.id === id){
            data.isCompleted = !data.isCompleted;
          }
          return data;
        });
        setTodoDate(newTodoData);
      }
 
      const handleClick = (id) =>{
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoDate(newTodoData)
      }
  return (
    <div>
        {todoData.map((data) => (
            <div key={data.id}>
              <div className='flex items-center justify-between px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded'>
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
          </div>
          ))}
    </div>
  )
}
