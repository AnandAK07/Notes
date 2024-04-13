import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';
import Counter2 from './Counter2';
import Todo from './Todo';

const intailState=0;
function App() {
  const [count,setCount]=useState(intailState)
  const lastValue=10;
  const handleAdd=()=>{
    setCount(count+1);
}

const handleSub=()=>{
    setCount(count-1);
}
  return (
    <div className="App">
      {/* <Counter handleAdd={handleAdd} handleSub={handleSub} count={count} lastValue={lastValue}/>
      <Counter handleAdd={handleAdd} handleSub={handleSub} count={count} lastValue={lastValue}/>
      <Counter2 count={count}/> */}
      <Todo/>
    </div>
  );
}

export default App;
