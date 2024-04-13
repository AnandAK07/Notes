import React, { useState,useRef } from "react";

const Counter=()=>{
    const [flag,setFlag]=useState(false);
    const countRef=useRef(null);
    
    // console.log(countRef.current);

    let count=1;
    const handlecountChange=(pre)=>{
        countRef.current=countRef.current+pre;
        console.log(countRef.current);
    };
    console.log("app got rendered or re-rendered",Date.now());
    return(
        <div>
            <h1>Counter app:{countRef.current}</h1>
            <button onClick={()=>handlecountChange(1)}>Increament</button>
            <button onClick={()=>handlecountChange(-1)}>Decreament</button>
            <button onClick={()=>setFlag(!flag)}>Change flag</button>
        </div>
    )
}

export default Counter;