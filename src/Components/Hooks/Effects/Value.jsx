import React, { useEffect, useState } from 'react'

const Value = () => {
    const [value, setValue] = useState(0);
    const [something, setSomething] = useState(0);

    useEffect(() => {
      if(value > 0){
        console.log("call useEffect");
        document.title = `Increment ${value}`;
      }
    }, [value]);
  return (
    <div>
        <h1>{value}</h1>
        <h2>{something}</h2>
        <button onClick={() => setValue(value + 1)}>Click me</button>
        <button onClick={() => setSomething(something + 1)}>Increment By Something</button>
    </div>
  )
}

export default Value