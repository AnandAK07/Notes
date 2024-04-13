const express = require('express');
const { connection, Usermodel } = require('./db');

const app=express()

app.use(express.json())


app.get('/',(req,res)=>{
    res.send({ message: "App is working" })
})


// getted data from mongoDB
app.get('/users',async(req,res)=>{
    const users=await Usermodel.find()
    res.send({users:users})
})

app.post('/users/add',async(req,res)=>{
    const {name,age}=req.body
    try {
        await Usermodel.create({ name, age })
        res.send({ message: "user added successfully" })
    } catch (error) {
        console.log({message:"error while adding data"})
    }
})

app.listen(8080,async()=>{
    try {
        // only connection !connection() involke
        await connection
        console.log("connection success")
    } catch (error) {
        console.log("connection fail")
    }
    console.log('8080')
})