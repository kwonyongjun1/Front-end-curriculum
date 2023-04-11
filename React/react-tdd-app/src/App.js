import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testId="counter">{count}</h3>    
        <button data-testId = "plus-button" onClick={()=>{setCount((prev) => prev +1)}}>+</button>
        <button data-testId = "minus-button" onClick={()=>{setCount((prev)=> prev - 1)}}>-</button>
      </header>
    </div>
  );
}

export default App;
