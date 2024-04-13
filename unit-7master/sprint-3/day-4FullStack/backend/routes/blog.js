const express = require('express');
const { BlogModel }=require('../model/Blog.model')

const blogRouter=express.Router();

blogRouter.get('/',async(req,res)=>{
    const blogs=await BlogModel.find();
})

// 8080/blog/create
blogRouter.post('/create', async (req, res) => {
    
    // const {}=req.body

    const blogs = await BlogModel.create();
})

module.exports={blogRouter}