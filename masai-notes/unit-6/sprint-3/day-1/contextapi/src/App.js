import logo from './logo.svg';
import './App.css';
// import Card from './Component/Card';
// import Avatar from './Component/Avatar';
import Data from './Component/Data';
import {AppContext} from "./index"

function App() {
  return (
    <div className="App">
      {/* <Card>
        <Avatar name="tom and jerry"/>
      </Card> */}
      <Data/>
    </div>
  );
}

export default App;
