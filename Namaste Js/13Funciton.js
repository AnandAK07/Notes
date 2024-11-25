// a();// a function will be called
// b();// b is not a function because of hoisting


// function statement or function declaration
function a(){
    console.log('a is called');
}
a();


// function expression
var b=function (){
    console.log('b is called');
}
b();

// // anonymous function
// function (){// will give error function statement require name 
//     //we can assign to a variable
// }

// Named function expression
var d=function named(){
    console.log(named);//function named will be printed
}
d();
named();//Reference error function is not defined

// Params & Arguments 
function e(Params){
    console.log('a is called');
}
e("argument");

// First class function 
// The ability of functions to be used as a value & passed as argument and returned from a function is known as First class function

//First class citizen
// function the ability to be used as value makes as First class function