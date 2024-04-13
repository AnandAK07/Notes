import React from "react";

const Counter=({state,handleAdd,handleSub})=>{
    
    
    return (<div>
        <h1>Counter:{state}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </div>)
}

export default Counter;