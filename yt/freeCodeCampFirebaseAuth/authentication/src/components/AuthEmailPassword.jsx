import React, { useState } from 'react'
import {app} from '../firebaseConfig'
// email & password
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// Google


export const AuthEmailPassword = () => {
    const [name,setName]=useState('');
    console.log(name);
    let auth=getAuth();

    // Google
    let googleProvider=new GoogleAuthProvider();
    // Google


    const [details,setDetails]=useState({
        email:'',
        password:''
    })
    const [loginDetails,setLoginDetails]=useState({
        email:'',
        password:''
    })


    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        console.log('signUp',name,value)  
        setDetails({...details,[name]:value});     
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('first');
        createUserWithEmailAndPassword(auth,details.email,details.password)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            alert(error.message);
        })
    }


    const handleChangeLogin=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        console.log('login',name,value)  
        setLoginDetails({...details,[name]:value});     
    }

    const handleSubmitLogin=(e)=>{
        e.preventDefault();
        console.log('first');
        signInWithEmailAndPassword(auth,details.email,details.password)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            alert(error.message);
        })
    }

    // Google
    const handleGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
  return (
    <div>
        <h1>Email & Password</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name='email' value={details.email} onChange={handleChange}/>
            <input type="password" name='password' value={details.password} onChange={handleChange}/>
            {/* <input type="submit" /> */}
            <button type='submit'>SignUp</button>
        </form>
        <h1>Email & Password Sign In</h1>
        <form onSubmit={handleSubmitLogin}>
            <input type="email" name='email' value={loginDetails.email} onChange={handleChangeLogin}/>
            <input type="password" name='password' value={loginDetails.password} onChange={handleChangeLogin}/>
            {/* <input type="submit" /> */}
            <button type='submit'>SignIn</button>
        </form>
        <button onClick={handleGoogle}>Google</button>


        {/* <input type="text" name={name} onChange={(e)=>setName(e.target.value)}/> */}
    </div>
  )
}
