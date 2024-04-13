// const express=require("express")

// const orderRouter=express.Router;

// method 2
// const {Router}=require("express");
// const orderRouter=Router();

const express=require("express");
const orderRouter=express.Router();


orderRouter.get("/",(req,res)=>{//orders/is same orders
    res.send({"Orders":[{"id":1,"title":"Anand"}]})
})
orderRouter.post("/",(req,res)=>{
    res.send("Orders")
})

orderRouter.put("/:ID",(req,res)=>{
    res.send("Orders")
})

orderRouter.delete("/:ID",(req,res)=>{
    res.send("Orders")
})

module.exports={orderRouter}