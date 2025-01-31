import React from 'react'

const Greeting = ({timeOfDay}) => {
    const name = "Misbah Ubaid";
    const date = new Date();
  return (
    <div>
        <h1> Hello, {name}! </h1>
        <p>Date: {date.getDate()}</p>
        <p>Time of Day: {(timeOfDay == "Morning")? "Morning" : (timeOfDay == "Afternoon") ? "Afternoon" : "Evening"}</p>
    </div>
  )
}

export default Greeting