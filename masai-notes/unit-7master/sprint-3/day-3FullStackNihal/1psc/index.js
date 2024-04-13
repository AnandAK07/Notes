const express = require('express');
const connection=require('./configs/db')
const mobileController=require('./controllers/mobile.controller')

const app=express();
app.use(express.json())

app.use('/mobiles',mobileController)

const PORT=8080
app.listen(PORT,async()=>{
    try {
        await connection()
        console.log(`listening at ${PORT}`)
    } catch (error) {
        console.log("app listening failure",error)
    }
})