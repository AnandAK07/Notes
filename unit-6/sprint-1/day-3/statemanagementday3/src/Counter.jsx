import React from 'react'
import { useState } from 'react'
import styles from './Counter.module.css';

const intailState=0;
const Counter = ({handleAdd,handleSub,count,lastValue}) => {
    // const [count,setCount]=useState(intailState)

    // const handleAdd=()=>{
    //     setCount(count+1);
    // }

    // const handleSub=()=>{
    //     setCount(count-1);
    // }
    console.log(lastValue);
  return (
    <div className={'counterComponent'} style={{border:"1px solid black"}}>
        <h1>Counter App uplifting prop parent to child</h1>
        <h2>count value:{count}</h2>
        <button disabled={count===lastValue} onClick={handleAdd}>Add 1</button>
        <button onClick={handleSub}>Sub 1</button>
    </div>
  )
}

export default Counter