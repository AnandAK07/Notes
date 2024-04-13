import React, { useState } from 'react'
import TodoInput from './TodoInput'

const Todo = () => {
    const [todos,setTodos]=useState([]);

    // console.log(todos);

    const handleSubmit=(text)=>{
        // setTodos(text)
        // console.log("hi")
        // console.log("submit",inputVal)
        const newTodoItem={
            name:text,
            status:false,
            id:text+Date.now()
        }
        const todoListAfterNewTodoAdded=[...todos,newTodoItem]
        setTodos(todoListAfterNewTodoAdded)
        console.log("text",text)
        console.log("newItem",newTodoItem)
    }
    console.log("todos",todos)

  return (
    <div>
        <h1>Todo Input</h1>
        <TodoInput btnText="Add Todos" handleSubmit={handleSubmit}/>
        <h1>Todo List</h1>
        {todos.map((el)=>(
            <div key={el.id}>
                {el.name}-{el.status?"Completed":"Not Completed"}
            </div>
        ))}
    </div>
  )
}

export default Todo