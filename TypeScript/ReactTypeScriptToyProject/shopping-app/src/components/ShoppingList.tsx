import React from "react";
import Item from '../models/items'


interface ShoppingListProps{
    items : Item[];
}

export default function ShoppingList({items} : ShoppingListProps): JSX.Element{
    
    return (<div>
        <h1>Shopping List</h1>
        <ul>
            {items.map(item=>(
                <li key={item.id}>{item.product}  - {item.quantity}</li>
            ))}
        </ul>
    </div>
    );
}