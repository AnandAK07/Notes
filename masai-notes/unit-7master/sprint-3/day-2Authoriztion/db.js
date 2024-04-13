const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const authModel = mongoose.model('Authentiction', authSchema)

const connection = mongoose.connect(`mongodb+srv://anandkumark055:anand07991@cluster0.sobwrtg.mongodb.net/?retryWrites=true&w=majority`)


module.exports = { authModel, connection }