import React, { useState } from 'react'

const intialBalance=0;
const Counter = () => {
    const [balance,setBalance]=useState(intialBalance)
    const [value,setValue]=useState(0);
    const handleDeposit=()=>{
        // console.log("Clicked",Date.now())
        // setBalance(balance+100);
        // console.log("1st",balance);
        // setBalance(balance+100);
        // console.log("2st",balance);
        // setBalance(balance+100);
        // console.log("3st",balance);
        // setBalance(balance+100);
        // console.log("4st",balance);
        // setBalance(balance+100);
        // console.log("5st",balance);
        // setValue(balance)
        setBalance((pre)=>{
            console.log("1st",pre)
            return pre+100;
        })
        console.log("1st",balance)
        setBalance((pre)=>{
            console.log("2st",pre)
            return pre+100;
        })
    }
    //setState there should be batch update-->to minimize the no of re-renders
    //setState stale closure with the outer function value
    return (
    <div>
        <h1>Balance:{balance}</h1>
        <button onClick={handleDeposit}>Deposit 100</button>
        <h2>{value}</h2>
        <button>withdraw 100</button>
    </div>
  )
}

export default Counter