// Function in JS
// Q1 What is Function Declaration or Defination or Statement

function square(num){
    return num*num;
}

// Q2 what is function expresion
// funtion declaration and functionExpresion both are same but in functionExpresion function assigned to a variable and hoisting is diff for both
// Q3 what is anonimous function
                       // funciton without name is known as anoynous function
var functionExpresion=function (num){
    return num*num;
}

console.log(functionExpresion(5))

// Q4 what is first class funtions 
// fuction are treated as a variable and passed into funtion as a argument & used, monuplated & returned as a function.
function square(num){
    return num*num;
}
function displaySquare(fn){
    console.log('Square '+fn(5))
} 

displaySquare(square)

// 5 What is IIFE(Imideat invoke function) we need to comment out all the code to see the output
// (function cube(num){
//     console.log(num*num*num);
// })(3)

// 6 output of this code
for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)//5 times prits 5 in the console
    },1000)
}

for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)// 1 2 3 4 5 prits in the console
    },1000)
}

// 7 hoisting and execution context
// 8 spread & rest operator
var spreadArray=[1,2,3,4,5]
function diameter(...rest){
    console.log(rest)
}
diameter(...spreadArray)


// Q1: what will be logged in console
let count=0;
function printCount(){
    if(count==0){
        let count=1;//shadowing
        console.log(count)//1
    }
    console.log(count)//0
}