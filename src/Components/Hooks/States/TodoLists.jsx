import {useState} from 'react'

const TodoLists = () => {
    const [todos,setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(inputValue.trim()){
            setTodos([...todos, inputValue])
            setInputValue('');
        }
    
    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Enter Todo' />
            <button type='submit'>Add Item</button>
        </form>
        <ul>
            <h1>Todo List</h1>
            {todos.map((item) => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoLists