import React, { useState } from 'react'

const ButtonWithState = () => {
    const [count,setCount]=useState(0);
    
    const hadleClick=()=>{
        setCount(count+1)
    }
    return (
    <div>
        <h1>useState{count}</h1>
        <button onClick={()=>hadleClick()}>ButtonWithState</button>
        <h3>Even if we change state count will not change to '0'</h3>
    </div>
  )
}

export default ButtonWithState