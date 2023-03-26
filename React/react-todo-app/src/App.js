import React, {Component}from 'react';
import './App.css';

export default class App extends Component{
  state = {
    todoData : [
      {
        id: "1",
        title: "공부하기",
        isCompleted: true
      },
      {
        id: "2",
        title: "청소하기",
        isCompleted: false
      }
    ],
    value : ""
  }
  btnStyle = {
    color : "#fff",
    border : "none",
    padding : "5px 9px",
    borderRadius : "50%",
    cursor : "pointer",
    float : "right"
  }

  getStyle = (completed) =>{
    return {
      padding : "10px",
      borderBottom : "1px #ccc dotted",
      textDecoration : completed ? "line-through" : "none"
    }
  }

  handleClick = (id) =>{
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData : newTodoData})
  }
  
  handleChange = (e) =>{
    this.setState({ value : e.target.value});
  }

  handleSubmit = (e) =>{
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      isCompleted: false,
    }

    this.setState({ todoData : [...this.state.todoData, newTodo], value : ""});
  }

  handleCompleteChange = (id) =>{
    let newTodoData = this.state.todoData.map((data) =>{
      if(data.id === id){
        data.isCompleted = !data.isCompleted;
      }
      return data;
    });
    this.setState({ todoData : newTodoData});
  }
  
  render(){
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.isCompleted)} key={data.id}>
              <input 
                type= "checkbox" 
                onChange={() => this.handleCompleteChange(data.id)}
                defaultChecked={data.isCompleted}
                />
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
          </div>
          ))}

            <form style = {{display: 'flex'}} onSubmit={this.handleSubmit}>
              <input 
                type = "text" 
                name = "value" 
                style= {{ felx : '10', padding : '5px'}}
                placeholder="해야 할 일을 입력하세요."
                value = {this.state.value}
                onChange={this.handleChange}
                />
                <input 
                  type="submit"
                  value="입력"
                  className="btn"
                  style={{flex: '1'}}
                />
            </form>
          
        </div>
      </div>
    )
  }
};
