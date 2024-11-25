// console.log(a);//undefined
// console.log(b);//Referance error can't access before initailization
// console.log(x);//Referance error not defined

// var a=10;
// var a=30;//redeclartion posible
// let b=20;
// var b=40;//SyntaxError b is already declared & not run a single line of code
// let b=50//SyntaxError b is already declared & not run a single line of code
// console.log(a);
// console.log(b);






//const theory

let a;

a=10;
console.log(a);


const b;//SyntaxError: missing initializer in const declaration
b=30;




//Type error
const b=40;
b=50;
console.log(b);//Type error: assignment to constant variable