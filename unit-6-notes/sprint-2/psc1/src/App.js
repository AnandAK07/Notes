import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const intialState={
  title:"",
  category:"",
  image:"",
  price:"",
}
function App() {
  const [formData,setFormData]=useState(intialState)
  const [loading,setLoading]=useState(false)
  
  
  const handleChange=(e)=>{
      // console.log(e)
      const {name,value}=e.target;
      // console.log(name,value)
      setFormData({...formData,[e.target.name]:e.target.value})
      console.log(formData)
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    // console.log(e)
    setLoading(true)

    fetch(`http://localhost:8080/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // body data type must match "Content-Type" header
    }).then((res)=>res.json()).then((data)=>{
      setLoading(false)
      // setFormData(intialState)
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
      setFormData(intialState)
    })
  }
  return (
    <div className="App">
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="">Title:</label>
        <input type="text" name="title" onChange={handleChange}/>
        <label htmlFor="">Category:</label>
        <input type="text" name="category" onChange={handleChange}/>
        <label htmlFor="">Image:</label>
        <input type="text" name="image" onChange={handleChange}/>
        <label htmlFor="">Price:</label>
        <input type="text" name="price" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
