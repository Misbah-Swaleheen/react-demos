import {useState} from 'react'

const Friends = () => {
    const [friends , setFriends]  = useState(['Nida', 'Maria']);
    const addFriend = () => setFriends([...friends, 'Sabah'])
    const removeFriend = () => setFriends(friends.filter(f => f != 'Nida'))
    const updateFriend = () => setFriends(friends.map(f => f == 'Maria'? 'Maria Khan' : f))
  return (
    <div>
        <ul>
            {friends.map((f) => (
                <li key={Math.random()}>{f}</li>
            ))}
        </ul>
        <button onClick={addFriend}>Add New Friend</button>
        <button onClick={removeFriend}>Remove Friend</button>
        <button onClick={updateFriend}>Update Friend</button>
    </div>
  )
}

export default Friends