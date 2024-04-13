const express=require("express")

const cartRouter=express.Router();

cartRouter.get("/",(req,res)=>{
    res.send("cart")
})
cartRouter.post("/",(req,res)=>{
    res.send("cart")
})

cartRouter.put("/:ID",(req,res)=>{
    res.send("cart")
})

cartRouter.delete("/:ID",(req,res)=>{
    res.send("cart")
})

module.exports={cartRouter}