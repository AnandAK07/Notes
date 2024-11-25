// // EX:1
// console.log('Start');

// setTimeout(function(){
//     console.log('Callback');
// },5000)

// console.log('End');

// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that main function. This allows the program to run other code until a certain task is completed, enabling asynchronous programming




// // EX:2
// function x(y){
//     console.log('x');
//     y();
// }

// x(function y(){
//     console.log('y')
// })



// EX:3
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("clicked");
})

