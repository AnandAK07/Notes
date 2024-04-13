import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addTodo} from '../Todo/action'

const Todo = () => {
  const [text,setText]=useState("");
  const todo=useSelector((store)=>store.todo);

  console.log(todo)
  const dispatch=useDispatch();
  console.log("Rendering Todos")
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" name="title" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo(text))}>Add todo</button>
        {/* {todo.map((todo)=>{
          return <div>
          </div>
        })} */}
    </div>
  )
}

export default Todo