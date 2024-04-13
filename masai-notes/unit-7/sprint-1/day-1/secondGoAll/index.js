// const {sub,add}=require("./cal")
// // const {add,sub}=require("./cal")
// // const [sub,add]=require("./cal")XX
// // const [add,sub]=require("./cal")
// // index matter not order in array

// const result=add(2,3)
// const subt=sub(3,2)
// console.log(result)
// console.log(subt)

// const os=require("os")

// // console.log(os.version())
// // console.log(os.cpus())
// // console.log(os.arch())
// // console.log(os.freemem())
// // console.log(os.networkInterfaces())

// const fs=require("fs");

// fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
//     // console.log(data)
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// const isEven=require("is-even");

// const op=isEven(6)

// console.log(op)

// const QRCode = require('qrcode')

// QRCode.toFile("syloan.png","https://sy-loan-finance-jxec.vercel.app/")


const {add,sub}=require("./cal");

const Addition=add(10,5);
const Subtration=sub(10,5);

console.log(`${Addition} ${Subtration}`)

const fs=require("fs");

fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

const qrcode=require("qrcode");

qrcode.toFile("myntra.png",`https://www.myntra.com/`);
