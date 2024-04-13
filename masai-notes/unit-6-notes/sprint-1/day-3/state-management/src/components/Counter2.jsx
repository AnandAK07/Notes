import React, { useState } from 'react'


const intialState=1
const Counter2 = () => {
    const [state,setState]=useState(intialState);
  // let [state,setState]=useState(intialState);
  // state=2
  console.log(state)
  
 
  const addCounter=()=>{
    // state++;
    setState(state+1)
  }
  const reduceCount=()=>{
    setState(state-1);
  }
  return (
    <div>
        <p>Counter2</p>
        <h1>Counter {state}</h1>
        <button onClick={addCounter}>Add</button>
      <button onClick={reduceCount}>Reduce</button>
    </div>
  )
}

export default Counter2