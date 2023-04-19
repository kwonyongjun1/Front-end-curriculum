import React from 'react';
import './App.css';

type Props = {
  value : any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({value, onIncrement, onDecrement} : Props) {
  return (
    <div className="App">
      {/* Clicked : {value} times */}
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>
    </div>
  );
}

export default App;
