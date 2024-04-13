import React, { useEffect, useState } from 'react'

const Post = () => {
    const[data,setData]=useState([]);
    console.log(1);
    const fetchDataFromApi=async ()=>{
        console.log("inside fun")
        try {
            const res=await fetch(``);
            const jsonData=await res.json();
            // console.log(jsonData)
            setData(jsonData)
        } catch (error) {
            console.log(error)
        }
    }
    console.log("before the useEffect fun,3");
    // fetchDataFromApi(data);
    // mounting phase you are going to render the data for the very first time
    useEffect(()=>{
        fetchDataFromApi(data);
    },[]);
    console.log("after the useEffect fun,3");
  return (
    <div>Post</div>
  )
}

export default Post