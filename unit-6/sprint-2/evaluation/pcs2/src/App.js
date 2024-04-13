import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";

const intialState={
  title:"",
  category:"",
  image:"",
  price:"",
}

function App() {
  const [formData,setFormData]=useState(intialState);
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false)
  const[page,setPage]=useState(1)
const limit=4;

  const getApiUrl=(url)=>{
    return url;
  }


  const getProductDataFromApi=async()=>{
    const apiUrl=getApiUrl(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);

    setLoading(true)
    try {
      const res=await fetch(apiUrl);
      const data=await res.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
console.log(data)

  //handle change event
  const handleChange=(e)=>{
    // console.log(e);
    const {name,value}=e.target;
    // console.log(name,value);
    setFormData({...formData,[e.target.name]:e.target.value});
    //console.log(formData)
  }

  //handle submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log("hi")
    setLoading(true);
    fetch(`http://localhost:8080/products`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res)=>res.json())
    .then((data)=>{
      setLoading(false)
      getProductDataFromApi();
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  }

  useEffect(()=>{
    getProductDataFromApi(page);
  },[page]);

  return (
    <div className="App">
      <div>
      <h1>form Input</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Title:
          <input type="text" name="title" onChange={handleChange}></input>
        </label>
        <label htmlFor="">
        Category:
          <input type="text" name="category" onChange={handleChange}></input>
        </label>
        <br/>
        <br/>
        <label htmlFor="">
          Image:
          <input type="text" name="image" onChange={handleChange}></input>
        </label>
        <label htmlFor="">
          Price:
          <input type="text" name="price" onChange={handleChange}></input>
        </label>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
      </div>
      <div>
        <h1>Product data</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
          {
            data.map((e)=>(
              <div key={e.id}>
                <img src={e.image} alt='notloaded' width={200} height={200}/>
                <p>Title:{e.title}</p>
                <p>Category:{e.category}</p>
                <p>Price:{e.price}</p>
              </div>
            ))
          }
        </div>
        <div>
          <button onClick={()=>{setPage(page-1)}} disabled={page===1}>pre</button>
          <button>{page}</button>
          <button onClick={()=>{setPage(page+1)}}>next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
