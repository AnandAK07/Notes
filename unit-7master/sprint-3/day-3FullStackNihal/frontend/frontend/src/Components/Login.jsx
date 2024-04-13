import React, { useState } from 'react'

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target
    console.log(name, value)
    setForm({ ...form, [name]: value })
  }
  console.log(form)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.token) {
          localStorage.setItem("psc_app_token", res.token)
        }
      }

      )
      .then((err) => console.log(err))
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name='email' value={form.email} placeholder='email' onChange={handleChange} required />
        <input type="password" name='password' value={form.password} placeholder='password' onChange={handleChange} required />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}
