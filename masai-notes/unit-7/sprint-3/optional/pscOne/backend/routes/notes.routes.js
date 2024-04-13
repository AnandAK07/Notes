const {Router}=require("express")
const {noteModel}=require("../models/Note.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const notesController=Router();

notesController.get("/",async(req,res)=>{
    const notes=await noteModel.find({userId:req.body.userId})
    res.send(notes)
})
notesController.post("/create",async(req,res)=>{
    const {Heading,Note,Tag}=req.body;
    const note=new noteModel({
        Heading,
        Note,
        Tag,
        userId
    })
    try {
        await note.save();
        res.send("note created")
    } catch (error) {
        res.send("something went wrong")
    }
    res.send(notes)
})

notesController.delete("/delete/:noteId",async(req,res)=>{
    const {noteId}=req.params;
    const deleteId=await noteModel.findByOneAndDelete({_id:noteId,userId:req.body.userId})
    res.send("deleted")
})

module.exports={notesController}