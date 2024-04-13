import React, {useState} from "react";


const initialState=0;//[]
const Counter2=()=>{
  

const [state,setState]=useState(initialState);

  const handleAdd=()=>{
    setState(state+1);
  };
  const handleSub=()=>{
    setState(state-1);
  };
  console.log(state)
    
    return (<div>
      <hr></hr>
      <p>Counter2</p>
      <h1>Counter:{state}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </div>)
}

export default Counter2;