import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import DecreamentCounter from './components/DecreamentCounter';
import IncreamentCounter from './components/IncreamentCounter';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);

  const handleInc=(val)=>{
    setCount(count+val)
  }

  const handleDec=(val)=>{
    setCount(count-val)
  }
  
  return (
    <div className="App">
      <Count count={count}/>
      <IncreamentCounter handleInc={handleInc}/>
      <DecreamentCounter handleDec={handleDec}/>
    </div>
  );
}

export default App;
