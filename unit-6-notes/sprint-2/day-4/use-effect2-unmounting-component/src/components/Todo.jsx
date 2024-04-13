import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todo,setTodo]=useState([])
    const [inputText,setInpuText]=useState("");
    const [page,setPage]=useState(1);
    const [limit,setLimit]=useState(2);
    // console.log(inputText)

    // GET request
    const getDataFromDB=async()=>{
        try {
            const res=await fetch(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
            const jsonData=await res.json();
            setTodo(jsonData)
            console.log(jsonData)
        } catch (error) {
            console.log(error)
        }
    }

    // POST request
    const postData=()=>{
        // console.log("clicking")
        const newTodoItem={
            title:inputText,
            status:false,
        }
        console.log(newTodoItem)
        setInpuText("")

            // Default options are marked with *
            fetch(`http://localhost:8080/todos`, {
              method: "POST", // POST
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(newTodoItem), // body data type must match "Content-Type" header
            }).then((res)=>{
                getDataFromDB();
            }).catch((error)=>{
                console.log("someting went wrong")
            })
    }

    // patch request 
    const handlePatch=(id,status)=>{
        // console.log(id,status)
        const updatedStatus={status:!status}
        fetch(`http://localhost:8080/todos/${id}`, {
              method: "PATCH", // POST
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(updatedStatus), // body data type must match "Content-Type" header
            }).then((res)=>{
                getDataFromDB();
            }).catch((error)=>{
                console.log("someting went wrong")
            })
    }

    // Delete request
    const handleDelete=(id)=>{
        // console.log(id);
        fetch(`http://localhost:8080/todos/${id}`, {
              method: "DELETE", // DELETE
              
            }).then((res)=>{
                getDataFromDB();
            }).catch((error)=>{
                console.log("someting went wrong")
            })
    }
    useEffect(()=>{
        getDataFromDB();
    },[])


    // console.log(todo)
    return (
    <div>
        <p>Todo Input</p>
        <input type="text" placeholder='Enter Todo' value={inputText} onChange={(e)=>{setInpuText(e.target.value)}}/>
        <button onClick={()=>postData()}>Add Todo</button>
        <div>
            {todo?.map((todo)=>(
                <div key={todo.id} style={{border:"1px solid black",width:"70%",textAlign:'center',margin:"auto",marginTop:"20px"}}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.status?"Completed":"Not Completed"}</h3>
                    <button onClick={()=>handlePatch(todo.id,todo.status)}>Toggle Todo</button>
                    <button onClick={()=>handleDelete(todo.id)}>Delete Todo</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Todo