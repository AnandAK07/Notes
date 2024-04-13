const {Router}=require("express")
const {userModel}=require("../models/User.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const userController=Router();

userController.post("/signup",(req,res)=>{
    const {email,password,age}=req.body;

    bcrypt.hash(password,5,async function(err, hash) {
        if(err){
            res.send("something went wrong,plz try signup again later")
        }
        const user=new userModel({
            email,
            password:hash,
            age,
        })
        try {
            await user.save();
            res.send("SignUp successful")
        } catch (error) {
            console.log(error)
            res.send("Something went wrong")
        }
    });
})

userController.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email})
    const hash=user.password
    bcrypt.compare(password, hash, function(err, result) {
        if(err){
            res.send("Something went wrong,plz try again later login")
        }
        if(result){
            const token = jwt.sign({ userId:user._id }, process.env.JWT_SECRET);
            res.send({message:"Login successfull",token})
        }else{
            res.send("Invalid credentials, plz signup if you haven't")
        }
    });
    
})

module.exports={userController}