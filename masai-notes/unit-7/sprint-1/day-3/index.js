// npm init -y or npm init enter->enter->....
// npm i express
// touch index.js to create index.js

// npm nodemon enter it monitor our application & restart our app after every change


// costam module
// node is inbuit module

// external 3rd party module
const express=require("express");

const app=express()


app.use(express.json())
// step 2
const fs=require("fs")

// step 2


// {
    //   "name":"alice"
    // }will only work bcs l-18
    
    
// method + route
app.get("/",(req,res)=>{
    // res.write("API works") in HTTP & res.end()
    // res.end() both complete this res.send
    res.send("API works")
})
// app.get("/public",(req,res)=>{
//     // res.end("public")
//     res.send("Public")
// })

// // post 
// app.post("/add",(req,res)=>{
//     const data=req.body;
//     console.log(data)
//     res.send("Data receved")
// })




// step 2

app.get("/posts",(req,res)=>{
    const post="actual posts here"
    res.send(post);
})

app.post("/posts/add",(req,res)=>{
    const post=req.body;
    console.log(post)
    // fs.writeFile("./posts.json",JSON.stringify(post),{encoding:"utf-8"},()=>{
    fs.appendFile("./posts.json",JSON.stringify(post),{encoding:"utf-8"},()=>{
        res.send("Post added")
    })
    // // add this post to the json
    // res.send("Post added")
})


app.listen(3000)