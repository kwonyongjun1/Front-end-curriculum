import React from 'react'

export default function List({todoData, setTodoDate}) {

    const btnStyle = {
        color : "#fff",
        border : "none",
        padding : "5px 9px",
        borderRadius : "50%",
        cursor : "pointer",
        float : "right"
      }
      const handleCompleteChange = (id) =>{
        let newTodoData = todoData.map((data) =>{
          if(data.id === id){
            data.isCompleted = !data.isCompleted;
          }
          return data;
        });
        setTodoDate(newTodoData);
      }

      const getStyle = (completed) =>{
        return {
          padding : "10px",
          borderBottom : "1px #ccc dotted",
          textDecoration : completed ? "line-through" : "none"
        }
      }
    
      const handleClick = (id) =>{
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoDate(newTodoData)
      }
  return (
    <div>
        {todoData.map((data) => (
            <div style={getStyle(data.isCompleted)} key={data.id}>
              <input 
                type= "checkbox" 
                onChange={() => handleCompleteChange(data.id)}
                defaultChecked={data.isCompleted}
                />
              {data.title}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
          </div>
          ))}
    </div>
  )
}
