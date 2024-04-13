import React, { useState } from "react";
import TodoInput from "./TodoInput";


const Todo=()=>{
    const [todos,setTodo]=useState([]);

    
    const handleSubmit=(text)=>{
        // console.log(e);
        // console.log(e.target);
        console.log("inside todo.jsx",text);
        // console.log(typeof text);

        const newTodoItem={
            title:text,
            status:false,
            id:text+ Date.now(),
        };

        //!arr.push(newTodoItem)||unshift
        const todoListAfterNewTodoAdded=[...todos,newTodoItem]
        console.log(typeof todos);

        setTodo(todoListAfterNewTodoAdded)
        
    }
    return <div className="App">
         <h1>TodoInput</h1>
        <TodoInput btnText={"Add Todos"} handleSubmit={handleSubmit}/>
        <hr />
        <h1>Todo Listing</h1>
        {todos.map((singletodo)=>(
                <div key={singletodo.id}>
                    {singletodo.title}-{singletodo.status?"Completed":"Not Completed"}
                    <button>Toggle Todo</button>
                </div>
        ))}
    </div>
}

export default Todo;