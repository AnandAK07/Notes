const express = require('express');
const { connection }=require('./configs/db')
const { userModel }=require('./model/User.model')
const bcrypt = require('bcrypt');
const { blogRouter }=require('./routes/Blog')


const app=express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({msg:"Api working fine"})
})

app.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body
    console.log(name, email, password)
    try {
        // Technique 2(auto - gen a salt and hash):
        bcrypt.hash(password, 4,async function (err, hash) {
            // Store hash in your password DB.
            await userModel.create({name:name,email:email,password:hash})
            return res.send({
                msg:"singup seccessfull",
                name:name,
                email:email,
                password:hash
            })
        });
    } catch (error) {
        console.log(error)
        return res.send({msg:"something went wrong while signup"})
    }
})

app.post('/login', async (req, res) => {
    const {email, password } = req.body
    console.log(email, password)
    try {
        // Technique 2(auto - gen a salt and hash):
        bcrypt.hash(password, 4, async function (err, hash) {
            // Store hash in your password DB.
            await userModel.create({ name: name, email: email, password: hash })
            return res.send({
                msg: "singup seccessfull",
                name: name,
                email: email,
                password: hash
            })
        });
    } catch (error) {
        console.log(error)
        return res.send({ msg: "something went wrong while signup" })
    }
})

app.use('/blog', blogRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log(`listening on 8080`)
    } catch (error) {
        console.log(`failed to connect mongoDB`)
    }
})