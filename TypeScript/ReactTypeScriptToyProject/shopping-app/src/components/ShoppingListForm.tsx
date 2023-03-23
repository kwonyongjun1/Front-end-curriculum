import React, {useRef}from "react";

interface ShoppingListFormProps{
    onAddItem: (item:string , item2: number ) => void;
  }

function ShoppingListForm({onAddItem} : ShoppingListFormProps): JSX.Element{
    
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        const newProduct = productInputRef.current!.value;
        const quantity = parseInt(quantityInputRef.current!.value);
        onAddItem(newProduct,quantity);
        productInputRef.current!.value = "";
        quantityInputRef.current!.value = "1";
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref = {productInputRef}/>
            <input type="number" min={0} ref = {quantityInputRef}></input>
            <button type="submit">Add Item</button>
    </form>
    );
}

export default ShoppingListForm