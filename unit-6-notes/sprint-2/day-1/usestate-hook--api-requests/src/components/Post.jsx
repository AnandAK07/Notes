import React, { useState } from 'react'

const Post = () => {
    const [postData,setPostData]=useState([]);
    const [loading,setLoading]=useState(false);

    const getPostData=async()=>{
        setLoading(true)
        try {
            const res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
                // fetch,setTimeout,setInterval ,clg() is webapi browser will provide us
            
            const data=await res.json();

            // console.log(res)
            // console.log(res.json())
            // console.log(data)
            setLoading(false)
            setPostData(data)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    console.log("after fun",postData)
    // getPostData();

    if(loading){
        return <div>
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading.gif" style={{width:"300px"}}/>
    </div>
    }

  return (
    <div>
        <h1>Posts</h1>
        <button onClick={()=>getPostData()}>Click here to get Post Data</button>
        {postData.map((item)=>(
            <div key={item.id} style={{border:"1px solid black",margin:"20px"}}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        ))

        }
    </div>
  )
}

export default Post

// array ->we want every
// higher order fun 
// map fun
// key={el.id} it solve error
// when we provide key=element.id it will be helpful for react to update DOM & it will optimize the rendering by identifying exact element.



// JS losly tight language 
// --when we define data type during compile time it will take the datatype 