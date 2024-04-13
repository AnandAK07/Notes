import React, { useState } from 'react'
import axios from 'axios'

const intialState={
  title:"",
  image:"",
  price:null
}
const AddProduct = () => {
  const [form,setForm]=useState(intialState);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    // console.log("change");
    console.log(name,value)
    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setForm(intialState);
    console.log(form)
    
    // post to end point
    axios.post(`https://fakestoreapi.com/products`,form).then(function(response){
      console.log(response)
      console.log("data posted")
    }).catch(function(error){
      console.log(error)
    })
  }
  return (
    <div>
      <h1>AddProduct</h1>
      <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter product Title' name='title' value={form.title} onChange={handleChange}/>
      <input type="text" placeholder='Enter link' name='image' value={form.image} onChange={handleChange}/>
      <input type="text" placeholder='Enter price' name='price' value={form.price} onChange={handleChange}/>
       <input type="submit" />
      </form>
    </div>
  )
}

export default AddProduct