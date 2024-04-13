import React, { useState } from 'react'

const ButtonWithState = () => {
    const [flag,setFlag]=useState(false);
    var count=0;
    const handleClick=()=>{
        count=count+1
        console.log(count)
    }  
    console.log(count)
  return (
    <div > 
        <h1>This is button with let see clg</h1>
        <button onClick={()=>handleClick()}>Botton with let</button>
        <button onClick={()=>setFlag(!flag)}>{flag?"state changed is false":"state changed is true"}</button>
        <h3>When we change state count will change to '0'</h3>
    </div>
  )
}

export default ButtonWithState