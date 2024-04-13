const mongoose = require('mongoose');
const {url} = require('./url');

const userSchema=mongoose.Schema({
    name: { type: String, required:true},
    age:{type:Number,required:true}
})

const Usermodel=mongoose.model('user',userSchema)


const connection=mongoose.connect(url)


module.exports={connection,Usermodel}
// const main = async () => {
//     try {
//         await mongoose.connect(url)
//         console.log(`connected to mongodb successfully`)
//         // post
//         // await Usermodel.insertMany([{name:"Anand",age:24},{name:"Asif",age:24}])
//         // console.log(`data inserted successfully`)
//         // const users=await Usermodel.find()

//         // get
//         // const users=await Usermodel.find({},{__v:0,_id:0})
//         // console.log(users)

//         // post schema explation
//         // await Usermodel.insertMany([{ name: "Anu", age: 21, city: 'blr' }, { name: "Anupama", age: 21, city: 'blr' }])
//         // no error
//         // extra info is trimed not added to mangoDB name,age is there city is not there in mangodb

//         // await Usermodel.insertMany([{ name: "Akash"}, { name: "Anas"}])
//         // no error
//         // data is added if in Schema we dont write required
//         // {type:Number,required:true}

//         // await Usermodel.insertMany([{ name: "Ritika" }, { name: "Ashvarya" }])
//         // error
//         // add age is required

//         // data type valition
//         // await Usermodel.insertMany([{ name: "Nayanatara",age:"35" }, { name: "Simbu",age:"38" }])
//         // age:"28"
//         // no error 
//         // but stored as age:28 in mongoDB

//         // await Usermodel.insertMany([{ name: "Nisha", age: "twenty two" }])
//         // error 
//         // Type casts "22" can be converted in JS 

//         // await Usermodel.insertMany([{ name: 101, age: "20" }])
//         // No error
//         // data is added bcs of Type cast
//     } catch (error) {
//         console.log(`error while connecting to MongoDB`)
//         console.log(error)
//     }
// }

// main()

