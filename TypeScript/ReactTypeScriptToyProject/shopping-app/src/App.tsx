import React ,{useState}from 'react';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/items'
import './App.css';


function App() {
  const[items,setItems] = useState<Item[]>([]);
  
  //setItems는 함수 
//   const items = [
//     {id: 1, product: "Lemon", quantity: 3},
//     {id: 2, product: "Chicken", quantity: 2},
// ];
  return (
    <div>
      <ShoppingList items={items}></ShoppingList>
      <ShoppingListForm></ShoppingListForm>
    </div>
  );
}

export default App;
