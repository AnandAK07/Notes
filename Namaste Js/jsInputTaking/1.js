var z="23333333"

var a=+z;
var b=Number(z)
console.log(a);
console.log(b);

// 2
var str="     Trim will trim leading & tailing space only        School         "
console.log(str.trim())

// 3
var str2="can, we, complete, js, today, because, there, is no tomorrow ";
var res=str2.split(",");
console.log(res)

// 4
var array=['1','2','3','4','5'];
var res=[];
for(var i=0;i<array.length;i++){
    // res.push(array[i]);
    res.push(Number(array[i]));
};
console.log(res);

// 5 map
var res2=array.map(Number);
console.log(res2)






















