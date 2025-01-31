import {useState} from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({ name: 'Bilal', age: 25});
    const handleClear = (event) => {
        event.target.value = "";
    }
    const updateName = (event) => {
        setProfile({...profile, name: event.target.value})
    }
    const updateAge = (event) => {
        setProfile({...profile, age: event.target.value})
    }
  return (
    <div>
        <h1>Name: {profile.name}</h1>
        <p>age: {profile.age}</p>

        <input type="text" defaultValue={profile.name} placeholder='Enter Your Name' onFocus={handleClear} onBlur={updateName} />
        <input type="number" defaultValue={profile.age} placeholder='Enter Your Age' onFocus={handleClear} onBlur={updateAge} />
    </div>
  )
}

export default Profile