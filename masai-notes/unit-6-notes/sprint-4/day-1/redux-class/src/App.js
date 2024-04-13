import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterWithRedux from './components/CounterWithRedux';

function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterWithRedux/>
    </div>
  );
}

export default App;
