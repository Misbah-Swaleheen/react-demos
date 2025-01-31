import React from 'react'

const List = () => {
    const numbers = [1,2,3,4,5];
  return (
    <div>
        <ul>
        {numbers.map((number) => (
            <li key={number}>{number}</li>
        ))}
        </ul>
    </div>
  )
}

export default List