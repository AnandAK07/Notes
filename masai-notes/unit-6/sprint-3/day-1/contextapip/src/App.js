import logo from './logo.svg';
import './App.css';
// import Card from './Component/Card';
// import Avatar from './Component/Avatar';

// import Data1 from "./Component/Data1";
import { useContext } from 'react';
import {AppContext} from "./index.js";


function App() {
  const value=useContext(AppContext);//Consume
  console.log(value);
  return (
    <div className="App">
      {/* <Card>
        <Avatar name="tom and jerry"/>
      </Card> */}
      
      {/* <Data1/> */}
      <h1>{value}</h1>
    </div>
  );
}

export default App;

