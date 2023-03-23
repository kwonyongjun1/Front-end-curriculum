import React ,{useState}from 'react';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/items'
import './App.css';
import {v4 as getId} from "uuid";


function App() {
  const[items,setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) =>{
    console.log("MADE TO THE APP COMPONENT!");
    setItems([...items, {id: getId(), product, quantity}]);
  }
  return (
    <div>
      <ShoppingList items={items}></ShoppingList>
      <ShoppingListForm onAddItem={addItem}></ShoppingListForm>
    </div>
  );
}

export default App;
