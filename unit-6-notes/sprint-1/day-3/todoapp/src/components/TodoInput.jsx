import React, { useState } from 'react'

const TodoInput = ({btnText,handleSubmit}) => {
    const [inputVal,setInputVal]=useState("")
    // const [todos,setTodos]=useState("")

    const handleChange=(e)=>{
        // console.log(e.target.value)
        setInputVal(e.target.value)
    }
    
    // console.log(todos)
  return (
    <div>
        <input type="text" placeholder='Enter Todos' value={inputVal} onChange={handleChange}/>
        <button onClick={()=>handleSubmit(inputVal)}>{btnText}</button>
    </div>
  )
}

export default TodoInput