import React from 'react'
const handleCopy = () => {console.log("Stop stealing my content")}
const Copy = () => {
  return (
    <div onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit, est eos accusantium fuga numquam quisquam autem vitae sunt error exercitationem delectus, aut debitis dolore non? Officiis architecto distinctio qui.</div>
  )
}

export default Copy