import logo from './logo.svg';
import './App.css';
import {AuthEmailPassword} from './components/AuthEmailPassword';
import { FireStore } from './components/FireStore';
import { FireBaseStorage } from './components/FireBaseStorage';

function App() {
  return (
    <div className="App">
      <AuthEmailPassword/>
      <FireStore/>
      <FireBaseStorage/>
    </div>
  );
}

export default App;
