// const [sub,add] =require('./calc.js');
// const [add,sub] =require('./calc.js');
// an array is order of same data type
// naming is not a matter order is matter

const {sub,add} =require('./calc.js');
// obj order is not a matter


const Adding=add(2,3)
const Subtracting=sub(7,5)

// console.log(Adding)
// console.log(Subtracting);

const os=require("os");

// console.log(os.version())
// console.log(os.cpus())
// console.log(os.arch())
// console.log(os.freemem())

const fs=require("fs")

fs.readFile("./lecture.txt",{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

const QRCode=require('qrcode')

QRCode.toFile('Bluefly.jpeg',`https://blue-fly-ruddy.vercel.app/`)

