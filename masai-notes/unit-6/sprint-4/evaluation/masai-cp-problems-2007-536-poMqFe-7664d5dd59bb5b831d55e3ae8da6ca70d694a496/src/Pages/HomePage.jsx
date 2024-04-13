import React from "react";
import TodoInput from '../Components/TodoInput'
import Row from '../Components/Row'
const HomePage=()=>{
    return (
        <div style={{width:"60%",margin:"auto", border:"6px solid green"}}>
            <h1>CRUD APP</h1>
            <TodoInput/>
            <Row/>
            HomePage
        </div> 
    )
}

export default HomePage;