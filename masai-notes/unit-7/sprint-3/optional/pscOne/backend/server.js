const express=require("express");
const {userController}=require("./routes/user.routes")
const {notesController}=require("./routes/notes.routes")
const {connection}=require('./config/db')
const {authentication}=require("./middlewares/authentication")

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    // const
    res.send("App is working")
})

app.use("/user",userController)
app.use(authentication)
app.use("/notes",notesController)

const PORT=8080;
app.listen(PORT,async()=>{
    try {
        console.log("connected to db")
    } catch (error) {
        console.log("not able to connect mongoose")
        console.log(error)
    }
    console.log(`App is listening at ${PORT}`);
})