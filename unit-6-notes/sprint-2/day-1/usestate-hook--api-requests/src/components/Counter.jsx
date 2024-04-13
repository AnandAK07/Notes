import React, { useState } from 'react'
import Post from './Post';

const Counter = (props) => {
  const grade="A";
    const [balance,setBalance]=useState(100);
    const [showCurrentBalance,setShowCurrentBalance]=useState(balance)
    // console.log("1")
    function handleAdd(){
      setBalance(balance+100);
      // console.log("2")
      console.log("inside fun",balance)
      // setShowCurrentBalance(balance)

      // 2.batch updates
      // setBalance(balance+100)//100+100=100
      // console.log(balance)
      // setBalance(balance+100)//100+100=100
      // console.log(balance)
      // setBalance(balance+100)//100+100=100
      // console.log(balance)
      // setBalance(balance+100)//100+100=100
      // console.log(balance)
      setBalance((prev)=>prev+100)
      setBalance((prev)=>prev+100)
      setBalance((prev)=>prev+100)
      setBalance((prev)=>prev+100)
    }
    // console.log("3")
    console.log(balance)
    // console.log(name)
    // console.log(batch)
    console.log(props)
  return (
    <div>
        <h1>React Banking App</h1>
        <h3>Balance: {balance}</h3>
        <button onClick={()=>handleAdd()}>+</button>
        {/* <h4>NewBalance: {showCurrentBalance}</h4>
        <button onClick={()=>setShowCurrentBalance(balance)}>show current</button> */}
        {/* <Post/>only for relize app */}
    </div>
  )
}

export default Counter