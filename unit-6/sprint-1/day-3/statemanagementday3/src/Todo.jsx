import React, { useState } from 'react'

const Todo = () => {
    const [inputText,setInputValue]=useState('');
    const [todoList,setTodoList]=useState([]);

    const handleTodoInput=(e)=>{
        // console.log(e.target.value)
        setInputValue(e.target.value);
        // console.log("inside:"+inputText);
    }
    // console.log(inputText);

    const hadleAddTodo=()=>{
        let newTodo={
            title:inputText,
            status:false,
            id:Date.now()+inputText,
        }
        setTodoList(...todoList,newTodo);
        // // console.log(newTodo)
    }
    // console.log(todoList);
  return (
    <div>
        <h1>Todo</h1>
        <input type='text' placeholder='Enter todo' onChange={handleTodoInput}/>
        <button onClick={hadleAddTodo}>Add Todo</button>
        <h2>Todo List</h2>
        <div>
            {todoList?.map((todo)=>(
                <p>{todo.title}-{todo.status?"Completed":"Not Completed"}</p>
            ))}
        </div>
    </div>
  )
}
/*
title:'tast1'
status:'false'

learn c++
learn js
*/
export default Todo