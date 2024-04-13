const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const connection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connection established')
    } catch (error) {
        console.log("connection failure")
    }
}

module.exports=connection