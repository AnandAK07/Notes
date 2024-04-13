import React from 'react'
import {useDispatch, useSelector} from 'react-redux'


export const Counter = () => {
    const dispatch=useDispatch()

    const count=useSelector((store)=>store.count);

    const handleAdd=()=>{

    }
    const handleSub=()=>{
      
    }
  return (
    <div>
      <h1>Counter App</h1>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </div>
  )
}
