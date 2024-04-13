import React from 'react'
import {store} from '../Redux/store'
import { useState } from 'react';

const CounterWithRedux = () => {
    // const value=store;
    // console.log(value);
    const {dispatch,getState,subscribe}=store;
    const [render,setRender]=useState(1);

    subscribe(()=>setRender(render+1))
    // to update react about the state change happened in the store in the redux
    
    console.log(getState().count)

    const handleAdd=()=>{
        // action obj for Add
        /**
         * {
         *  type:"ADD ONE",
         *  payload:1
         * }
         */
        // value.dispatch();XXX
        console.log("Add fun called")
        dispatch({type:"ADD_ONE",payload:2})
    }
    const handleSub=()=>{
        // action obj for Sub
        /**
         * {type:"SUB ONE",payload:1}
         * dispatcher fun/dispatch action
         */
        console.log("Sub fun called")
        dispatch({type:"SUB_ONE",payload:1})
    }
  return (
    <div>
        <h1>Counter With Redux</h1>
        <h2>Counter: {getState().count}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
    </div>
  )
}

export default CounterWithRedux