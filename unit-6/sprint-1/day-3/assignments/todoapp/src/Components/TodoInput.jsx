
import React,{useState} from "react";
import Todo from "./Todo";

const IntialText=""
const TodoInput=({btnText,handleSubmit})=>{
    const [inputVal,setInputVal]=useState(IntialText);

    const handleInput=(e)=>{
        // console.log(e);
        // console.log(e.target);
        //console.log(e.target.value);
        setInputVal(e.target.value); 
    }

    //react want all the control over defaut behaviour
    return <div>
        
        <input type="text" placeholder="Enter Todo" value={inputVal} onChange={handleInput} />
        <button onClick={()=>handleSubmit(inputVal)}>{btnText}</button>
        
    </div>
};

export default TodoInput;