import React ,{useState}from 'react';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/items'
import './App.css';


function App() {
  const[items,setItems] = useState<Item[]>([]);
  const addItem = (product: string) =>{
    console.log("MADE TO THE APP COMPONENT!");
    console.log(product);
  }
  //setItems는 함수 
//   const items = [
//     {id: 1, product: "Lemon", quantity: 3},
//     {id: 2, product: "Chicken", quantity: 2},
// ];
  return (
    <div>
      <ShoppingList items={items}></ShoppingList>
      <ShoppingListForm onAddItem={addItem}></ShoppingListForm>
    </div>
  );
}

export default App;
