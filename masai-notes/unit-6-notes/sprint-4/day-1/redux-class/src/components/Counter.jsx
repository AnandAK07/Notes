import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);

    const handleAdd=()=>{
        setCount(count+1)
    }
    const handleSub=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>Counter:{count}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
    </div>
  )
}

export default Counter

// UI use interface:-14-19View
// logic -how counter is updating the value:-model
// how UI is interacting with:-UI knows that value is changed:-controller

// M:Model
// V:View
// C:Controller

/**Flux Architecture
 * 
 * Action -what happed-{obj} :-Inc,Dec
 * Dispatcher:-Fuction which dispatches the action Add({action as a argument})
 * store:-store the data for whole application:-{}
 * 
 */