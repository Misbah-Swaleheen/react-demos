import React from 'react'

const moveHandler = () => {
   
    console.log("Mouse move event is fired")
}
const Move = () => {
  return (
    <div onMouseMove={moveHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio inventore, expedita, aliquam minima nemo voluptatem nobis eveniet sapiente adipisci placeat eos voluptate explicabo quaerat quibusdam labore obcaecati odio? Ad?
    </div>
  )
}

export default Move