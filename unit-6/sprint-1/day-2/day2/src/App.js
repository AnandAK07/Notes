import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Card2 from './Card2'
import ArgumentPassing from './ArgumentPassing';
import MyButton from './MyButton';

// parent component
function App() {//declaration

  // fuction definition(parameter)

  const companyName="Red Gear"
  
  const btn1="this is also dynamic"
  return (
    <div CompanyName="App">
      <h1>Day2 Components</h1>
      if it is in same file use "./"
      else "../"

      <h1>App.js should be parent Component ? :- No but one component need to be parent component but industry cultchur</h1>
    
      <Card/>
      <Card/>this is reuseability by calling N times
      <Card2/>
      <ArgumentPassing name={"Headset"} price={1000} companyName={companyName}/>
      <MyButton textContent={"1st button"}/>
      <MyButton textContent="click on me"/>
      <MyButton textContent="don't click on me"/>
    </div>
  );
}
// function1
// f2
// f3 is defination no use

// f1(arguments)
// f2()
// f3()

// js function
// fuction declaration
// function defination


export {App};

// default:-
// named:-
