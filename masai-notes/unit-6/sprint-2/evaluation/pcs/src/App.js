import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const intialState={
  title:"",
  category:"",
  image:"",
  price:"",
}
function App() {
  const [formData,setFormData]=useState(intialState);
  const [loading,setLoading]=useState(false);

  function hangleOnChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  function handleFormSubmit(event){
    event.preventDefault();
    console.log(event);
    setLoading(true);
    fetch(`http://localhost:8080/products`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json())
    .then((data)=>{})
    .catch((err)=>{
      setLoading(false);
      console.log(err);
    })
  }
  return (
    <div className="App">
      <h1>form input</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="">
          Title:
          <input type="text" name="title" onChange={hangleOnChange}/>
        </label>
        <label htmlFor="">
          Category:
          <input type="text" name="category" onChange={hangleOnChange}/>
        </label>
        <br/>
        <br/>
        <br/>
        <label htmlFor="">
          image:
          <input type="text" name="image" onChange={hangleOnChange}/>
        </label>
        <label htmlFor="">
          price:
          <input type="text" name="price" onChange={hangleOnChange}/>
        </label>
        <br/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
