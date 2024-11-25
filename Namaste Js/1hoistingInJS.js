getName();      //namaste js
console.log(x); //undefined
console.log(getName); //whole code
// o/p function getName(){
    // console.log("namaste js");
// }

var x=7 //when we comment out not defined will
function getName(){
    console.log("namaste js");
}

getName();      //namaste js
console.log(x); //  7
console.log(getName);
// o/p function getName(){
    // console.log("namaste js");
// }

getName2();//getName is not a function
var getName2=()=>{  //getName2=undefined
    console.log('namaste js2');
}

getName3();//getName is not a function
var getName3=function (){
    console.log('namaste js3');
}







