

function a(){// a fun is lexically inside Global execution context
    var b=10;
    console.log(b);//10
    console.log(x);//20
    c();
    function c(){//c fun is lexically inside a
        console.log(b);//10
        console.log(x);//20
    }
}

a();

console.log(x);//undefined
var x=20
console.log(b); //not undefined
console.log(x); //20