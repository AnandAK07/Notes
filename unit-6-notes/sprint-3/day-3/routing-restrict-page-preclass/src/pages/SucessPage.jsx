import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'


const SucessPage = () => {
    const [count,setCount]=useState(5);
    const navigate=useNavigate();
    useEffect(()=>{
        const id=setInterval(()=>{
            setCount(prev=>{
                if(prev===1){
                    clearInterval(id)
                    // instead of 16
                    navigate('/')
                }
                return prev-1;
            })
        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[])


    // component 
    // if(count===0){
    //     return <Navigate to='/'/>
    // }
  return (
    <div>
        <h1>Sucessfully made the purchase</h1>
        <h3>Redirection in {count} sec</h3>
    </div>
  )
}

export default SucessPage