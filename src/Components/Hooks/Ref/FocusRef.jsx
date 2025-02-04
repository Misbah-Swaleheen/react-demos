import React, { useRef } from 'react'

const FocusRef = () => {
    const inputElement = useRef(null)
    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = 'Misbah'
    }
  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={() => focusInput()}>Focus & Write</button>
    </div>
  )
}

export default FocusRef