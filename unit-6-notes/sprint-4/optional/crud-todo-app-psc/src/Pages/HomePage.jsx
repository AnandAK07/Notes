import React, { useEffect } from 'react'
import TodoInput from '../Components/TodoInput'
import Row from '../Components/Row'
import Navbar from '../Components/Navbar'
import { getData } from '../Redux/action'
import {useSelector, useDispatch} from 'react-redux'

const HomePage = () => {

    const todos=useSelector((store)=>store.reducer.todos)
    console.log(todos)
    
    const dispatch=useDispatch();

    useEffect(()=>{
        // getData(dispatch);
        dispatch(getData())
    },[])
  return (
    <div style={{ margin:'auto' ,alignItems:'center'}}>
        
            <h1>CRUD App</h1>
        <Navbar/>
        <TodoInput/>
        {todos?.map((todo)=>{
            return <Row key={todo.id} {...todo}/>
        })}
    </div>
  )
}

export default HomePage