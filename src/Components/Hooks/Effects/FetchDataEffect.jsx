import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            if(data && data.length) setData(data)
        }
        getData();
    },[])
  return (
    <div>
        <h1>FetchDataEffect</h1>
        <ul>
            {data.map((post) => (
                <li key={post.id}>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FetchDataEffect