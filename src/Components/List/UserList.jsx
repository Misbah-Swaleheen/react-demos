import React from 'react'

const UserList = () => {
    const users = [
        {id: 1, name: "Alice",age: 25 },
        {id: 2, name: "Bob", age: 30 },
        {id: 3, name: "Charlie", age: 22}
    ]
  return (
    <div>UserList
            {users.map(({id, name, age}) => (
                <div key={id}>
                    <p>Name: {name}, Age: {age}</p>
                </div>
            ))}
    </div>
  )
}

export default UserList