import React, { useState } from 'react'

export const Register = () => {
  const [form,setForm]=useState({
    email:'',
    password:'',
    age:null
  })

  const handleChange=(e)=>{
    // console.log(e.target)
    const {name,value}=e.target
    console.log(name,value)
    setForm({...form,[name]:value})

  }
  console.log(form)

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:8080/user/signup`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .then((err)=>console.log(err))
  }
  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name='email' value={form.email} placeholder='email' onChange={handleChange} required/>
        <input type="password" name='password' value={form.password} placeholder='password' onChange={handleChange} required />
        <input type="number" name='age' value={form.age} placeholder='age' onChange={handleChange} required />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}
