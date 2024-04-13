// const express=require('express');

// const {connection,Usermodel}=require('./db')

// const app=express();
// app.use(express.json())


// app.get('/',(req,res)=>{
//     res.send('App is working')
// })

// app.listen(8080,async()=>{
//     try {
//         await connection
//         console.log('connected to mongodb successfully')
//     } catch (error) {
        
//     }
//     console.log(8080)
// })

const express = require("express")

const { connection, Usermodel } = require("./db")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send({ message: "API working fine" })
})

//getting the users
app.get("/users", async (req, res) => {
    const users = await Usermodel.find()
    res.send({ users: users })
})

//creating
app.post("/users/add", async (req, res) => {
    const { name, age } = req.body;
    await Usermodel.create({ name, age })
    res.send({ message: "user addded successfully" })
})


//updating
//findByIDAndUpdate
// findOneAndUpdate
// findOneAndReplace

//deleting
//findByIDAndDelete
// findOneAndDelete


https://mongoosejs.com/docs/queries.html

app.listen(8080, async () => {
    try {
        await connection
        console.log("connected to mongodb successfully")
    }
    catch (err) {
        console.log("err connecting to mongodb")
        console.log(err)
    }
    console.log("listening on port 8080")
})