import React, { useState } from "react";
import { store } from "../Redux/store";
import { INCREMENT } from "../Redux/actionType";
const Counter=()=>{
    // const [counter,setCounter]=useState(1);
    const [count,setCount]=useState();
    //store from redux
    const storeData=store;
    const {getState,dispatch}=storeData;
    // console.log(storeData)
    // console.log(getState());

    const data=store;
    const hadleAdd=()=>{
        // setCounter(counter+1);
        console.log("clicked");
        // dispatch({type:"INCREMENT",payload:1});
        dispatch(INCREMENT());
    }
    const hadleSub=()=>{
        // setCounter(counter-1);
        dispatch({type:"DECREMENT",payload:1});
    }
    return(
        <div>
            <h1>Counter App</h1>
            {/* <h2>Counter: {counter}</h2> */}
            <h2>Counter: {getState().count}</h2>
            <button onClick={hadleAdd}>Add</button>
            <button onClick={hadleSub}>Sub</button>
        </div>
    )
}

export default Counter;
//user click --action object will be created 
//action{type :"increment" ,payload}
/*
action 
dispatch(action)
reducer()
*/


//M
//V-button
//C

/*
button click-->hadleClick-->setCounter()
--render the app-->counter value will be changed

*/

//Action   -->Dispatcher-->Store-->View
//Action(object)what to do-
// Dispactcher(function)--how to do
//store(object)--we have a centerlized store