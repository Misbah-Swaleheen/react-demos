import {useState} from 'react'

const ProfileInfo = () => {
    const [profile, setProfile] = useState({ name: 'Bilal', age: 25});
    const handleClear = (event) => {
        event.target.value = "";
    }
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProfile((prevProfile) => ({...prevProfile, [name]:value,}))
    }
   
    
  return (
    <div>
        <h1>Name: {profile.name}</h1>
        <p>age: {profile.age}</p>

        <input type="text" name="name" value={profile.name} onChange={handleChange} onFocus={handleClear} placeholder='Enter Your Name'  />
        <input type="number" name='age' value={profile.age} placeholder='Enter Your Age' onFocus={handleClear} onChange={handleChange} />
    </div>
  )
}

export default ProfileInfo