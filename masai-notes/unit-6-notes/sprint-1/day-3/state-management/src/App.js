import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

const intialState=1
function App() {
  const [state,setState]=useState(intialState);
  // let [state,setState]=useState(intialState);
  // state=2
  console.log(state)
  
 
  const addCounter=()=>{
    // state++;
    setState(state+1)
  }
  const reduceCount=()=>{
    setState(state-1);
  }
  return (
    <div className="App">
      <Counter state={state} addCounter={addCounter} reduceCount={reduceCount}/>
      <Counter state={state} addCounter={addCounter} reduceCount={reduceCount}/>
      <Counter state={state} addCounter={addCounter} reduceCount={reduceCount}/>
      {/* props drilling parent to child */}
      <hr />
      {/* uplifting */}
      <Counter2/>
      <Counter2/>
    </div>
  );
}

export default App;
