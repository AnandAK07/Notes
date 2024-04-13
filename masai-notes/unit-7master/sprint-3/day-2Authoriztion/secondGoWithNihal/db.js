const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role:{type:String,default:"student",enum:["student","instructure"]}
})

// we will get error if we give role apart from enum
const authModel = mongoose.model('user', authSchema)

const connection = mongoose.connect(`mongodb+srv://anandkumark055:anand07991@cluster0.sobwrtg.mongodb.net`)


module.exports = { authModel, connection }
