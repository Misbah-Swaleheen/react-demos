import {useState} from 'react'

const ShoppingList = () => {
    const [shoppingItems, setShoppingItems] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setShoppingItems([...shoppingItems, {name: event.target[0].value, quantity: event.target[1].value}]);

    }
    const handleClear = (event) => {
        event.target.value = '';
    }
  return (
    <div>
        <ul>
            <h1>Shopping List</h1>
            {shoppingItems.map((item) => (
                <li key={Math.random()}>Item: {item.name}, Quantity: {item.quantity}</li>
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" id='item' onFocus={handleClear} placeholder='Enter Shopping Item' />
            <input type="number" id='quantity' onFocus={handleClear} placeholder='Enter Quantity' />
            <button type='submit'>Add Item</button>
        </form>
    </div>
  )
}

export default ShoppingList