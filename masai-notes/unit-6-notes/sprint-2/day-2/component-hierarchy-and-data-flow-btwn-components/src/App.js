import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  const name="Anand"
  return (
    <div className="App">
      <Counter name={name}/>//parent to child prop drilling
      <Counter/>
    </div>
  );
}

export default App;
