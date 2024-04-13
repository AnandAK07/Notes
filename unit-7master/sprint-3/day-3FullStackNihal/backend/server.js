const express = require('express');
const { connection }= require('./config/db');
const { userController }=require('./routes/user.route')
const { notesController }=require('./routes/notes.route')
const { authentication }=require('./middlewares/authentication')
const cors = require('cors');

const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Home page")
})
app.use(cors())

app.use('/user',userController)
app.use(authentication)
app.use('/notes', notesController)

const PORT=8080
app.listen(PORT,async()=>{
    try {
        await connection
        console.log(`mongoDB is connected`)
    } catch (error) {
        console.log("error while connecting to mongoDB")
        console.log(error)
    }
    console.log(`listening at port:${PORT}`)
})
