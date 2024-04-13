import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {store} from '../Redux/store'
import { increament } from '../Redux/action';

const Count = () => {
    // step 2
    const count=useSelector((store)=>store.count);
    
    // console.log(store)
    // console.log(count)


    const dispatch=useDispatch();
    const handleAdd=()=>{
        // action for INC
        dispatch({type:"INCREMENT",payload:1});
        
    }
    const handleRed=()=>{
        // action for DEC
    }
    const handleReset=()=>{
        // action for reset
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>Counter Value: {count}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRed}>Sub</button>
    </div>
  )
}

export default Count