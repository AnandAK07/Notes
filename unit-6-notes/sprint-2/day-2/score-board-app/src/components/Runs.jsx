import React from 'react'

const Runs = ({handleRun,setBalls,balls}) => {
  
  return (
    <div>
        <button onClick={
          ()=>{
            handleRun(0);
            setBalls(balls+1)
          }
        }>0</button>
        <button onClick={()=>{handleRun(1);setBalls(balls+1)}}>1</button>
        <button onClick={()=>{handleRun(2);setBalls(balls+1)}}>2</button>
        <button onClick={()=>{handleRun(3);setBalls(balls+1)}}>3</button>
        <button onClick={()=>{handleRun(4);setBalls(balls+1)}}>4</button>
        <button onClick={()=>{handleRun(5);setBalls(balls+1)}}>5</button>
        <button onClick={()=>{handleRun(6);setBalls(balls+1)}}>6</button>
        <button onClick={()=>{handleRun(1);setBalls(balls)}}>wide ball</button>
        <button onClick={()=>{handleRun(1);setBalls(balls)}}>No Ball</button>
    </div>
  )
}

export default Runs

/*
what is usefullness of function 

-we can call/import/pass as props the function in react
-we can pass the value inside the fun as a argument to the function and we can receive as parameter  

*/