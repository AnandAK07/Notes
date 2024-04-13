import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

function App() {
  const value=useContext(AppContext);
  console.log(value)
  return (
    <div className="App">
      <h1>{value}</h1>
    </div>
  );
}

export default App;
