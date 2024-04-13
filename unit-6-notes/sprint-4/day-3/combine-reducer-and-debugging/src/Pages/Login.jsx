import axios from 'axios';
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getLoginFailure, getLoginRequest, getLoginSuccess } from '../Redux/AuthReducer/action';
import {Navigate} from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  
  const dispatch=useDispatch();
  const authDetails=useSelector((store)=>store.authReducer)
  
  console.log("Login",authDetails)
  const handleSubmit=()=>{
    console.log("set",email,password)
    const userDetails={
      email,
      password
    }
    console.log(userDetails)
    dispatch(getLoginRequest())
    // dispatch action for request
    axios.post(`https://reqres.in/api/login`,userDetails).then((res)=>{
      // sucess action object
      console.log(res)
      dispatch(getLoginSuccess(res.data.token))
    }).catch((error)=>{
      // error action object
      dispatch(getLoginFailure())
    })
  }

  if(authDetails.isAuth){
    return <Navigate to={'/'}/>
  }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login