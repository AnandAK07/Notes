// // ESM way : import add from "./calc.js"
// // CJS way;

// // custom modules
// const {add, sub} = require("./calc")


// const sum = add(2,3)
// const difference = sub(5,3)

// console.log(sum) // 5
// console.log(difference) // 2


// Node Inbuilt modules

// const os = require("os")

// console.log(os.networkInterfaces())

// const fs = require("fs")


// fs.readFile("./dummy.txt", {encoding : "utf-8"}, (err, data) => {
//     console.log(data)
// })
// it is giving us data  but in hexadecimal value (ASCII value of each character in the file)
// so we give the encoding:"utf-8" in options, to get in readable format


// External module

// const isEven = require("is-even")

// const result = isEven(6)

// console.log(result)

// Let's create a QR code?


var QRCode = require('qrcode')

QRCode.toFile("ourfirstqr.jpeg", "https://www.linkedin.com/in/nihal-ahmed-0101/")