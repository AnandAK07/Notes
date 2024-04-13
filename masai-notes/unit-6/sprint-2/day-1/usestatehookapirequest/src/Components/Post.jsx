import React, { useState } from 'react'

const Post = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const handleClick=()=>{
        console.log("clicked");
        getDataFromApi();
    }

    const getDataFromApi=async ()=>{
        setLoading(true)
        const res=await fetch(`https://jsonplaceholder.typicode.com/posts`)
        console.log(res);
        const jsonData=await res.json();
        console.log(jsonData)
        setData(jsonData)
        setLoading(false)
    }
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>Post</h1>
        <button onClick={handleClick}>Get Post Data</button>
        {
            data.map((post)=>(
                <div>
                    <p>{post.id}-{post.title}</p>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Post