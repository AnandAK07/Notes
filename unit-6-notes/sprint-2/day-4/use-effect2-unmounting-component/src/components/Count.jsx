import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
    <h1>Count</h1>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <button onClick={()=>setCount(count-1)}>Sub</button>
    </div>
  )
}

export default Count