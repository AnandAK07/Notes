import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Timer from './components/Timer';
import Count from './components/Count';
import Todo from './components/Todo';

function App() {
  const [toogle,setTogle]=useState(false)
  return (
    <div className="App">
      <h1>Unmounting phase</h1>
      {toogle?<Timer/>:
      <Count/>}
      <button onClick={()=>setTogle(!toogle)}>{toogle?"Show Count":"Show Timer"}</button>
      {/* <Todo/> */}
    </div>
  );
}

export default App;

