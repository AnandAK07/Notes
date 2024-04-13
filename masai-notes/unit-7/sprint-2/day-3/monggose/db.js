const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({

    // title : String,
    // rating:Number,
    // hero:String

})


const movieModel = mongoose.model('movie', movieSchema);

const connection = mongoose.connect('mongodb+srv://anandkumark055:z37OXNGaJatNfJVN@cluster0.hrfdbgz.mongodb.net/')


module.exports={movieModel,connection}
