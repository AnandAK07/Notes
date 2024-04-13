const { Router } = require('express');
const { NoteModel } = require('../models/Note.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const notesController = Router();

notesController.get('/',async(req,res)=>{
    const note = await NoteModel.find({userId:req.body.userId})
    console.log(note)
    return res.send(note)
})

notesController.post('/create', async (req, res) => {
    const { Heading, Note, Tag, userId }=req.body
    console.log(userId,"notes")
    const note = new NoteModel({ userId,Heading, Note, Tag })
    try {
        await note.save();
        return res.send("note created successfully")
    } catch (error) {
        console.log(error)
        return res.send("note creation failure")
    }
})

notesController.patch("/edit/:noteId", async (req, res) => {
    const { noteId } = req.params;
    // const {}=req.body;
    const deletedNote = await NoteModel.findOneAndUpdate({ _id: noteId, userId: req.body.userId }, req.body)
    if (deletedNote) {

        return res.send(`${deletedNote} is deleted`)
    } else {
        return res.send(`${deletedNote} not deleted`)

    }
})

notesController.delete("/delete/:noteId",async(req,res)=>{
    const {noteId}=req.params;
    const deletedNote=await NoteModel.findOneAndDelete({_id:noteId,userId:req.body.userId})
    if(deletedNote){

        return res.send(`${deletedNote} is deleted`)
    }else{
        return res.send(`${deletedNote} not deleted`)

    }
})


module.exports = { notesController }