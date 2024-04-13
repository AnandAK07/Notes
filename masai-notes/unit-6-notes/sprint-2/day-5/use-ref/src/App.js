import logo from './logo.svg';
import './App.css';
import ButtonWithState from './components/ButtonWithState';
import ButtonWithLet from './components/ButtonWithLet'
import UseRefUsing from './components/UseRefUsing';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <ButtonWithLet/>
      <ButtonWithState/>
      <UseRefUsing/>
      {/* <FormComponent/> */}
    </div>
  );
}

export default App;
