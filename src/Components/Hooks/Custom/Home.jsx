import React from 'react'
import useFetch from './useFetch'

const Home = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <div>
        <ul>
            {data && data.map((item) => {
               return <li key={item.id}>{item.title}</li>
            })}
        </ul>
    </div>
  )
}

export default Home