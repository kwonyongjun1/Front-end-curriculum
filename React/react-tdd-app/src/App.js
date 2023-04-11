import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testId="counter">{count}</h3>    
      </header>
    </div>
  );
}

export default App;
