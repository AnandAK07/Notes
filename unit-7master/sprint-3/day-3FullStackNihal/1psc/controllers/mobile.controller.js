// router
// moniter in class
const express = require('express');
const router=express.Router();
const mobileModel=require('../models/mobile.model')

router.get('/', async(req, res) => {
    try {
        const mobile = await mobileModel.find()
        return res.status(200).send(mobile)

    } catch (error) {
        console.log(error)
        return res.status(400).send("This is Home page with 400 status")
    }
})

router.post('/', async (req, res) => {
    try {
        const mobile = await mobileModel.create(req.body)
        return res.status(200).send(mobile)

    } catch (error) {
        console.log(error)
        return res.status(400).send("This is Home page with 400 status")
    }
})

router.patch('/:id', async (req, res) => {
    const {id}=req.params
    try {
        const mobile = await mobileModel.findByIdAndUpdate({_id:id},req.body)
        return res.status(200).send(mobile)

    } catch (error) {
        console.log(error)
        return res.status(400).send("This is Home page with 400 status")
    }
})

router.delete('/:id', async (req, res) => {
    const {id}=req.params
    console.log(id)
    try {
        const mobile = await mobileModel.findByIdAndDelete(id)
        
        return res.status(200).send(`${mobile} is deleted`)
    } catch (error) {
        console.log(error)
        return res.status(400).send("This is Home page with 400 status")
    }
})



module.exports=router

