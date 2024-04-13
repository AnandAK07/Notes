const express=require("express");

const reportsRouter=express.Router();

reportsRouter.get("/",(req,res)=>{
    console.log("Here is Reports")
    res.send("Here is resorts")
})

module.exports={reportsRouter}