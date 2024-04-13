import './App.css';
import React,{useState} from 'react';
import Counter from './Component/Counter';
import Counter2 from './Component/Counter2';
// console.log(React)

function App() {
  //JS
  // const data=useState();
  // console.log(data);
const initialState=1;//[]
const [state,setState]=useState(initialState);//don't hard code like ([])
//     counter,setCounter

// console.log(state);
//state -initialState={},[],boolean;

//state variable it can array/object/fuction
//setState =>function
/*
state-curent state object bcs eventhing is object/immutable
setState-updater function (this state)or dispatcher function
*/
  const handleAdd=()=>{
    // state++;!work//you state cann't update or mutate the state variable directly
    setState(state+1);
    //setCounter
  };
  const handleSub=()=>{
    setState(state-1);
  };
  console.log(state)
  return (
    
    <div className="App">
      {/* <h1>Counter:{state}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button> */}
      <Counter state={state} handleAdd={handleAdd} handleSub={handleSub}/>
      <Counter2/>
      <Counter2/> 
  
      {/* {jsx} */}
    </div>
  );
}

export default App;
