import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import DefaultExport from './components/DefaultExport';
import MyButton from './components/MyButton';
import ConditionalRendering from './components/ConditionalRendering';
import Card from './components/Card'

function App() {
  const name="Anand "
  const age=22;

  const handleClick1=()=>{
    console.log("click now")
  }
  const handleClick2=()=>{
    console.log("click here")
  }
  const handleClick3=()=>{
    console.log("clicked")
  }
  return (
    <div className="App">
      {/* <DefaultExport name={name} age={age}/>
      <FirstComponent name={name} age={age}/>
      <FirstComponent></FirstComponent>
      <SecondComponent/>
      <MyButton onClick={handleClick1} buttonText="Click now"/>
      <MyButton onClick={handleClick2} buttonText="Click here"/>
      <MyButton onClick={handleClick3} buttonText="Clicked"/>
      <ConditionalRendering/> */}
      <Card/>
    </div>
  );
}

export default App;
