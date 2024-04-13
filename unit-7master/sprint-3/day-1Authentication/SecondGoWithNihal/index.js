const express = require('express');
const {connection} = require('./db');
const {userModel}=require('./model/User.model')
const jwt = require('jsonwebtoken');

const app=express();

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("App is running successfull")
})

app.post('/signup',async(req,res)=>{
    const {email,password}=req.body;
    try {
        await userModel.create({email,password})
        console.log("done")
        res.send({message:"Signup successfull"})
    } catch (error) {
        console.log("while signup failure")
        res.send({message:"Singup Failure"})
    }
    // res.send("Signup...")
})

app.post('/login', async(req, res) => {
    const {email,password}=req.body
    
    const user=await userModel.findOne({email,password})
    if(user){
                    // {weCanchangeItOravoid}forThisCaseTokenWillBeShort its optional
            // return res.send({ message: "login successfull", token: "xyz" })//{_id,email,password,token}inmongoDB not a issue
        var token = jwt.sign({ auth: 'user' }, 'secreateKeyIgiven12345');
        return res.send({ message: "login successfull", token: token})
    }else{
        return res.send('login failure')
    }
    // res.send("Login........")
})

app.get('/reports',(req,res)=>{
    // const token=req.query;
    const token= req.headers.authorization?.split(" ")[1]//Bearer enjebaeeanele
    // verify a token symmetric
    jwt.verify(token, 'secreateKeyIgiven12345', function (err, decoded) {
        if(decoded){
            console.log(decoded.auth) // bar
            return res.send("here are the reports")
        }else{
            return res.send("login first")
        }
    });

    // if(token==="xyz"){
    //     return res.send({ message: "Here the reports"});
    // }else{
    //     return res.send({msg:"login first"})
    // }
})

app.listen(8080,async()=>{
    try {
        await connection
        console.log(`app connected to mongoDB`)
    } catch (error) {
        console.log(`failed to connect`)
    }
    console.log(`app is listening at 8080`)
})