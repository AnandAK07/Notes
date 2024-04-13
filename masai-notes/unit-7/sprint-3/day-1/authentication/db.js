const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect(`${process.env.MONGO_URL}/ptweb16auth`)

module.exports={connection}
