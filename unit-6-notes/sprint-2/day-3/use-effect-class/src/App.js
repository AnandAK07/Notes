import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [limit,setLimit]=useState(5);

  console.log(limit)
  console.log(currentPage)
  // useEffect(); --it manages side effects in functional components

  // sideeffect
  // if we want to talk with external api -->side effect

  // useEffect(()=>{},[]); one callback function & one dependency array


  const getPostData=async(limit,currentPage)=>{
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${currentPage}`);
      // Query parameter
      const jsonData=await response.json();
      console.log(jsonData)
      setData(jsonData)
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(data)
// async fun 2s it will take it will impact user experience
// browser - to update the dom tree as per jsx is present

// after updating dom tree this fun need to be called
// getPostData();

// console.log(1)
useEffect(()=>{
  // console.log(2)
  // useEffect is fun call which is remembered by React it is called after JSX is shown on the UI
 getPostData(limit,currentPage);
},[limit,currentPage]);
// this dependency array will help sideEffect something is got changed
// if remove this dependency array "[]" this useEffect() fun is called everytime in update phase
// to avoid this we are using []

// console.log(3)
  return (
    <div className="App">
      <div>
        <h3>set page limit</h3>
        <button onClick={()=>{setLimit(10);console.log(10)}}>10</button>
        <button onClick={()=>{setLimit(20)}}>20</button>
        <button onClick={()=>{setLimit(30)}}>30</button>
        <button onClick={()=>{setLimit(40)}}>40</button>
        <button onClick={()=>{setLimit(50)}}>50</button>
      </div>
      <div>
        <button onClick={()=>{setCurrentPage(currentPage-1)}}>Prev</button>
        <button>{currentPage}</button>
        <button onClick={()=>{setCurrentPage(currentPage+1)}}>Next</button>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",marginTop:"20px"}}>
        {data.map((ele)=>(
          <Posts key={ele.id} {...ele}/>
        ))}
      </div>
    </div>
  );
}

export default App;
