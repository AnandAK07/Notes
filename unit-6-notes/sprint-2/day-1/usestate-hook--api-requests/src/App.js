import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Post from './components/Post';

function App() {
  const name="Anand";
  const batch="ptweb12";
  return (
    <div className="App">
      <Counter name={name}/>
      <Counter batch={batch}/>
      <Post/>
    </div>
  );
}

export default App;
