import React from 'react'

const JSXExpression = () => {
    const myName = "Misbah Ubaid";
    const multiply  = (a,b) => a * b;
    const specialClass = 'simple-class';
  return (
    <div>
        <p> 2 + 2 = {2+2}</p>
        <h1>{myName}</h1>
        <p>My Friends List: {['Nida ', 'Sabah ', 'Sobia ']}</p>
        <p> 2 * 3 = { multiply(2,3)}</p> 
        <p className={specialClass}>This is special class</p>
    </div>
  )
}

export default JSXExpression