import React, { useReducer, useState } from 'react'

const initialState = {count:0};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + 1};
            break;
        case 'decrement':
            return {...state, count: state.count -1};
            break;
        case 'specifiedAmount':
            return {...state, count: state.count + 10};
            break;
        case 'addByGivenAmount':
            return {...state, count: state.count + parseInt(action.payload.amount)};
            break;
        case 'subByGivenAmount':
            return {...state, count: state.count - parseInt(action.payload.amount)};
            break;
        case 'reset':
            return {...state, count: 0};
            break;
        default:
            return state;
            break;
    }
}
const CountReducer = () => {
    const [value, setValue] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'increment'})} >+</button>
        <button onClick={() => dispatch({type: 'decrement'})} >-</button>
        <button onClick={() => dispatch({type: 'specifiedAmount'})} >+10</button>
        <button onClick={() => dispatch({type: 'reset'})} >Reset</button>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value) } placeholder='Enter Number' />
        <button type="button" onClick={() =>  dispatch({type: 'addByGivenAmount', payload: {amount:value}})}>Add</button>
        <button type="button" onClick={() =>  dispatch({type: 'subByGivenAmount', payload: {amount:value}})}>Sub</button>
        
        
    </div>
  )
}

export default CountReducer