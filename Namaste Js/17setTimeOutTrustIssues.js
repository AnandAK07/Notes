// 1code

console.log("Start");

setTimeout(function cb(){
    console.log('callback');
},5000)

let startTime=new Date().getTime();
let endTime=startTime;

while(endTime<startTime+10000){
   endTime=new Date().getTime();
}

console.log("End");

// //2code
// console.log("Start");

// setTimeout(function cb(){
//     console.log('callback');
// },0)

// console.log("End");








