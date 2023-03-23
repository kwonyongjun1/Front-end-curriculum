import React from 'react';
import ShoppingList from './components/ShoppingList';
import './App.css';


function App() {
  const items = [
    {id: 1, product: "Lemon", quantity: 3},
    {id: 2, product: "Chicken", quantity: 2},
];
  return (
    <div>
      <ShoppingList items={items}></ShoppingList>
    </div>
  );
}

export default App;
