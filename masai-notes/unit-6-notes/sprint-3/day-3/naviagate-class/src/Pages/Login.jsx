import React, { useState ,useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


const Login = () => {
    const [email,setEmail]=useState('eve.holt@reqres.in');
    const [password,setPassward]=useState('cityslicka');
// eve.holt@reqres.in
// cityslicka
const {authdetails,loginIn,logOut}=useContext(AuthContext);
// console.log(value)
console.log(authdetails)
   const handleLogin=async()=>{
    const userDetails={
        email,
        password
    }
    const response = await fetch(`https://reqres.in/api/login`, {
        method: "POST", 

        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
 
        body: JSON.stringify(userDetails), // body data type must match "Content-Type" header
      });
      const jsonData=await response.json();
      console.log(jsonData)
      loginIn(jsonData.token)
    // console.log(userDetails)
    
   }
   if(authdetails.authState){
    return <Navigate to='/' />
  }
   
  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter Email' value={password} onChange={(e)=>setPassward(e.target.value)}/>
        <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default Login