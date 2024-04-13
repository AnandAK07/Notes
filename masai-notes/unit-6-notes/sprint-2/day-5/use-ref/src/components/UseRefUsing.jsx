import React, { useState,useRef } from 'react'

const UseRefUsing = () => {
    // let count=0;instead ref.current
    const [flag,setFlag]=useState(false);
    const ref=useRef(0)
    console.log(ref)//{current:null}
                    // {key:null}
    const handleClick=()=>{
        // count=count+1
        // console.log(count)
        ref.current=ref.current+1
        console.log(ref)
    }
    // console.log(count)
  return (
    <div >
        <h1>This is button with {ref.current}</h1>
        <button onClick={()=>handleClick()}>Botton with let</button>
        <button onClick={()=>setFlag(!flag)}>{flag?"state changed is false":"state changed is true"}</button>
    </div>
  )
}

export default UseRefUsing