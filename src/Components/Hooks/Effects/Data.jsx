import React, { useEffect, useState } from 'react'

const Data = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            if(data && data.length) setData(data);
        }
        getData();
    }, [])
  return (
    <div>
        <h1>Todo</h1>
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Data