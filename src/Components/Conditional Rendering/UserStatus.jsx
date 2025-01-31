import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
  return (
    <div>
       <h1>
            {loggedIn && (isAdmin ? "Welcome Admin!" : "Welcome User!")}
        </h1> 
    </div>
  )
}

export default UserStatus