// //if expect single statement
// if(true)console.log('asdfghj');

// if(true){
//     // combine multiple statements it's a use of block
//     var a=10;
//     console.log(a);
// }


// // 2 point
// var a=100;

// {
//  var a=10;//shadowing
//  let b=20;
//  const c=30;
//  console.log(a);//10
//  console.log(b);
//  console.log(c);
// }

// console.log(a);//10 (100 transformed to 10 in the Global space)
// console.log(b);// error not initialized
// console.log(c);// error not defined

// 3 point
var a=100;
let b=200;
const c=300;

{
 var a=10;//shadowing
 let b=20;
 const c=30;
 console.log(a);//10
 console.log(b);//20
 console.log(c);//30
 {
    console.log(a+'it will print 10');
    var a=13000
    console.log(a+'printed 13000');
 }
}

console.log(a);//10 (100 transformed to 10 in the Global space)
console.log(b);//200
console.log(c);//300

