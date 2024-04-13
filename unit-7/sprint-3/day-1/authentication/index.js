const express=require("express");
const {connection}=require("./db")
const {userModel}=require("./models/User.model")

app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("app is working")
})


app.post("/signup",async(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    try {
        await userModel.create({email,password})
        res.send("Sign up Successfull")
    } catch (error) {
        res.send("Error to send data")
    }
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    
    
    try {
        
        await userModel.create({email,password})
        res.send("Sign up Successfull")
        
    } catch (error) {
        res.send("Error to send data")
    }
})

const PORT=8080;
app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("mangodb connection successful")
    } catch (error) {
        console.log("error while connecting mongodb")
    }
    console.log(`port is listening at ${PORT}`)
})
















// // const express= require("express")
// // const {connection}=require("./db")

// // const app=express();

// // app.use(express.json())

// // app.get("/",(req,res)=>{
// //     res.send("App is working")
// // })

// // app.post("/signup",(req,res)=>{
// //     const {email,password}=req.body;
// //     res.send({msg:"Sign up successfull"})
// // })

// // app.post("/login",(req,res)=>{
// //     res.send({msg:"Login successfull"})
// // })
// // const PORT=8080;
// // app.listen(PORT,async()=>{
// //     try {
// //         await connection;
// //         console.log("Connected to mongodb successfully")
// //     } catch (error) {
// //         console.log("Error while connecting mongodb")
// //     }
// //     console.log("listengin on port 8080")
// // })