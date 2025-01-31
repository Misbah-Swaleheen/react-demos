import React from 'react'

const handleClick = () => {console.log(Math.round(Math.random() * 10))}
const Button = () => {
  return (
    <button onClick={handleClick}>Click</button>
  )
}

export default Button