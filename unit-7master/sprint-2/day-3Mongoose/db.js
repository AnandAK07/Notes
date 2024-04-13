// const { url } = require('./url')
// const mongoose = require('mongoose')

// const userSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true }
// })

// const UserModel = mongoose.model('user', userSchema)

// const connection = async () => {
//     try {
//         await mongoose.connect(url)
//         console.log(`connection to mongoDB successfully`)
//         await UserModel.insertMany([{ name: 'suma', age: '25' }, { name: 'Somu', age: 25 }])
//         console.log('data is added successfully')
//         // const users=await UserModel.find({},{__v:0,_id:0});
//         // console.log(users)
//     } catch (error) {
//         console.log(`error while connecting to MongoDB`)
//         console.log(error)
//     }
// }
// // connection()

// module.exports = { connection, UserModel }



const mongoose = require("mongoose")
const { url } = require("./url")

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
})

const Usermodel = mongoose.model("user", userSchema)

const connection = mongoose.connect(url)

module.exports = { connection, Usermodel }