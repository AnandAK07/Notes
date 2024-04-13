import React, { useEffect } from 'react'

const Counter = () => {


    // useEffect
    // 1.call back fun
    // 2.array
        useEffect(()=>{
            // call any function here 
            // multi time or sigle time
        },[]/*we restrick no. of calls here */)
  return (
    <div>
        <h1>Counter</h1>
    </div>
    
  )
}

export default Counter