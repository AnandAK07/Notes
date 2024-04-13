import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {store} from '../Redux/store'
import { decrement, increament, reset } from '../Redux/action';


const Count = () => {
    // step 2
    const count=useSelector((store)=>store.count);
    
    // console.log(store)
    // console.log(count)


    const dispatch=useDispatch();
    const handleAdd=()=>{
        // action for INC
        // dispatch({type:"INCREMENT",payload:1});
        dispatch(increament(1))
    }
    const handleRed=()=>{
        // action for DEC
        dispatch(decrement(1));
    }
    const handleReset=()=>{
        // action for reset
        // dispatch(reset(0));
        dispatch(reset())
    }
    console.log("app is rendering")
  return (
    <div>
        <h1>Counter App</h1>
        <h2>Counter Value: {count}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRed}>Sub</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Count