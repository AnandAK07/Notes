const mongoose = require('mongoose');

const mobileSchema=new mongoose.Schema({
    name:{type:String,required:true},
    mobile_brand: { type: String, required: true },
    launch_year: { type: String, required: true },
    price: { type: String, required: true }
})

const mobile = mongoose.model('Mobile', mobileSchema)

module.exports=mobile