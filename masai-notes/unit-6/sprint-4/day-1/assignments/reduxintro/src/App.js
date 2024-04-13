import logo from './logo.svg';
import './App.css';
import { store } from './Redux/store';

function App() {

  const data=store;
  console.log(data)
  return (
    <div className="App">
      <h1>Counter: 0</h1>
      <button>Add</button>
      <button>Reduce</button>
    </div>
  );
}

export default App;
