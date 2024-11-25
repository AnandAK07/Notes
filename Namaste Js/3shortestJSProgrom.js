// Empty file is a shortest program in JS

var a=6;
function b(){
    var x=7;
}
console.log(window.a);//6 in browser
console.log(a);       //6 in browser
console.log(this.a);  //6 in browser
console.log(x);       //x is undefined because it's  not stored in the global space