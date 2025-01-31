import {useState} from 'react'

const TodoList = () => {
    const [todoItems, setTodoItems] = useState([]);
    const handleBlur = (event) => {
        setTodoItems([...todoItems, event.target.value]);
    }
    const handleFocus = (event) => {
        event.target.value = '';
    }
  return (
    <div>
        <ul>
            <h1>Todo Items</h1>
            {todoItems.map((item) => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>
        <input type="text" placeholder='Enter New Item' onBlur={handleBlur} onFocus={handleFocus} id='newItem'/>
    </div>
  )
}

export default TodoList