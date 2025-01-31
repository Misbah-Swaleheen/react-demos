import React from 'react'

const Weather = ({temperature}) => {
  return (
    <div>
        <h1>Temperature: &nbsp;
            {(temperature < 15)? "It's cold outside!" : (temperature > 15 && temperature <= 25) ? "It's nice outside!" : "It's hot outside!" }
        </h1>

    </div>
  )
}

export default Weather
