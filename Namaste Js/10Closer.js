// note
//function along with it's lexical scope is known as Closer 
// or A closer gives access to an outer funtion from it's inner funtion
//3.closer are created everytime when function is created . function creation time
//4.Uses of Closer is module design pattern, Currying in Js, Function like once,memoize, maintaining state in in async world,setTimeouts, Iterator and many more


//code

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }

// x();

// //2code
// function z(){
//     var b=700;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }

// z();

// 3 code

function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    // inner()
    return inner;//this function will remember the value of a
}
outer()();//calling the inner function or

var close=outer();
close();//both are same




