const express=require("express");
const userRouter=express.Router();

userRouter.get("/",(req,res)=>{
    console.log("user")
    console.log("/user"+req.method+" "+req.url)
    res.send("Users")
})

userRouter.get("/:userId",(req,res)=>{
    // http://localhost:8080/users/1
    console.log(req.params)
    console.log("/user/:userId"+req.method+" "+req.url)
    res.send('user'+" "+req.params.userId)
})

module.exports={userRouter}