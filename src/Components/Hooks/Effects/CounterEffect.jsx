import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count > 0) document.title = `Increment ${count}` 
    }, [count]);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default CounterEffect