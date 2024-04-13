import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ADD_COUNT,SUB_COUNT} from '../Counter/action'

export const Counter = () => {
    const dispatch=useDispatch()

    const count=useSelector((store)=>store.count);

    const handleAdd=()=>{
      dispatch({type:ADD_COUNT,payload:1})
    }
    const hadleSub=()=>{
      dispatch({type:SUB_COUNT,payload:1})
    }
  return (
    <div>
      <h1>Counter App</h1>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={hadleSub}>Sub</button>
    </div>
  )
}
