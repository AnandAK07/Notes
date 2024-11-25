// 1code

console.log("Start");

setTimeout(function cb(){
    console.log('callback');
},5000)

console.log("End");

//2code
console.log("Start");

setTimeout(function cb(){
    console.log('callback');
},0)

console.log("End");







