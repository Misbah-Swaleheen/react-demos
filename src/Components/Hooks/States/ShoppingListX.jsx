import { use } from 'react';
import {useState} from 'react'

const ShoppingListX = () => {
  
    const [shoppingItems, setShoppingItems] = useState([]);
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const handleClear = (e) => e.target.value = '';
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity)
        };
        setShoppingItems((prevItems) => ([...prevItems, newItem]));
        setName('');
        setQuantity('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Item: </label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter item' onFocus={handleClear} />
            <label htmlFor="quantity">Quantity: </label>
            <input type="text" name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Enter quantity' onFocus={handleClear} />
            <button type='submit'>Submit</button>
        </form>

        <ul>
            <h1>Shopping Items</h1>
            {shoppingItems.map((item, index) => (
                <li key={index}>{item.name} - {item.quantity}</li>
            ))}
        </ul>
    </div>
  )
}

export default ShoppingListX