import './App.css';
import { Navbar } from './Components/Navbar';
import {Themes} from './Components/Themes'
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <>
    {/* <div className="App"> */}
      

      <Navbar/>
      <Themes/>
      <AllRoutes/>

    {/* </div> */}
    </>
      
  );
}

export default App;
