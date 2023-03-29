import React,{useCallback, useState} from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';

export default function App(){

  console.log('App Component')
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) =>{
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      isCompleted: false,
    }

    setTodoData(prev =>
      [...prev, newTodo]
    )

    setValue(" ");

  }

  const handleClick = useCallback((id) =>{
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData)
  }, [todoData])
  
  
    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
          <div className='flex justify-between'>
            <h1>할 일 목록</h1>
          </div>

          <Lists todoData = {todoData} setTodoData = {setTodoData} handleClick = {handleClick}/>

          <Form handleSubmit={handleSubmit} setTodoData = {setTodoData} setValue = {setValue}/>  
          
        </div>
      </div>
    )
};
