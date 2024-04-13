import React, { useReducer } from 'react'

const intialState={count:0};

const Counter = () => {
    function reducer(state,action){
      
        switch(action.type){
          case 'increament':
            return {count:state.count+1};
          case 'decreament':
            return {count:state.count-1};
          default: 
            throw new Error();
        }
      }
const [state,dispatch]=useReducer(reducer,intialState);
  
return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={()=>dispatch({type:'decreament'})}>-</button>
        <button onClick={()=>dispatch({type:'increament'})}>+</button>
    </div>
  )
}

export default Counter