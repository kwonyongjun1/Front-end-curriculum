import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

export default function App(){

  const [todoData, setTodoDate] = useState([]);
  const [value, setValue] = useState("");

  
  
  
  

  const handleSubmit = (e) =>{
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      isCompleted: false,
    }

    setTodoDate(prev =>
      [...prev, newTodo]
    )
    setValue("")

  }

  
  
    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
          <div className='flex justify-between mb-3'>
            <h1>할 일 목록</h1>
          </div>

          <List todoData = {todoData} setTodoDate = {setTodoDate}/>

          <Form handleSubmit={handleSubmit} setTodoDate = {setTodoDate} setValue = {setValue}/>  
          
        </div>
      </div>
    )
};
