/*
Q1: sum of all natural numbers from 1 to n

sum of 1 to 5:15
*/

function sumOfNaturalNumber(num){
    // let sum=0;
    // for(let i=1;i<=num;i++){
    //     sum+=i;
    // }
    // return sum;
    return num*(num+1)/2;
}
console.log('Q1 '+sumOfNaturalNumber(5));
console.log('Q1 '+sumOfNaturalNumber(6));

/* 
Q2: Sum of digits of a Number

1287:1+2+8+7=18
*/

function sumOfDigitsOfANumber(num){
    let sum=0;
    while(num>0){
        sum=sum+num%10;
        num=Math.floor(num/10);
    }
    return sum;
}

console.log('Q2 '+sumOfDigitsOfANumber(1287))

/**
 Q3: count the number of digits of a number
 */

 function countDigits(num){
    num=Math.abs(num);
    let c=0;
    // method 1;
    // while(num>0){
    //     c++;
    //     num=Math.floor(num/10);
    // }
    // return c;

    // method 2;
    // dowhile loop(this ensures that loop will excecute at least once)
    do {
        c++;
        num=Math.floor(num/10);
    } while (num>0);
    return c;
 }
 console.log('Q3 '+countDigits(-135456))

//  Q4(9.Palidrome Number) https://leetcode.com/problems/palindrome-number/description/
var isPalindrome = function(x) {
    let copyNum=x,revNum=0;
    while(copyNum>0){
        let lastDigit=copyNum%10;
        revNum=revNum*10+lastDigit;
        copyNum=Math.floor(copyNum/10);
    }
    return x==revNum;
};

console.log('Q4 '+isPalindrome(121))


// Q5 (509. Fibonacci Number) https://leetcode.com/problems/fibonacci-number/
var fib = function(n) {
    // 0 1 1 2 3 5
    if(n<2){
        return n;
    }
    let prev=0,curr=1,next;
    for(let i=2;i<=n;i++){
        next=prev+curr;
        prev=curr;
        curr=next;
    }
    return next;
};
console.log('Q5 '+fib(5))


// Q6 (268 Missing Number) https://leetcode.com/problems/missing-number/description/

var missingNumber = function(nums) {
    // method 1
    // let sum=0;
    // for(let i=0;i<nums.length;i++){
    //     sum+=nums[i];
    // }
    // return nums.length*(nums.length+1)/2-sum;

    // method 2
    return nums.length*(nums.length+1)/2-nums.reduce((acc,curr)=>acc+curr)
};

console.log(`Q6 `+missingNumber([3,2,0]))


// Arrays in js 42:19
const arr1=[1,2,3,"Hello",{name:"Vishal"},[1,2,3]];//it's allowed in js only
const arr2=new Array();
console.log(arr1,arr2)

// How do you add an element to the end of the array
arr1.push(7) //O(1)
console.log(arr1)

// How do you remove the last element from an array
arr1.pop()//O(1)
console.log(arr1)

// How do we add an element to the start of an array
arr1.unshift(0);
console.log(arr1)

// How do we remove an element from the start of an array
arr1.shift();
console.log(arr1);


// How to loop through an array
let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    // console.log(arr[i]+" ")
    process.stdout.write(arr[i]+" ");
}
console.log(``)

// forEach loop
arr.forEach((x,i)=>{
    process.stdout.write(x+" ");
})
console.log(`\nfor of loop`)

// for of loop
for(let x of arr){
    process.stdout.write(x+" ");
}

const findElement=(arr,target)=>{
    for(let x of arr){
        if(x==target){
            return true;
        }
    }
    return false;
}

console.log(findElement(["Hello",1,2,3,4,5],"Hello"));
console.log(findElement([1,2,3,4,5],6));

console.log(["Hello",1,2,3,4,5].includes("Hello"))
console.log(["Hello",1,2,3,4,5].includes(2))

const findElementIndex=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}

let arr3=["Hello",0,1,2,3,4,5,6,7,8,9,10,11,12]
console.log(findElementIndex(arr3,"Hello"));
console.log(arr3.indexOf(3));

// How to delete,and & update element from specific index (element [4,5,6] is deleted from arr3)
arr3.splice(5,3)
console.log(arr3)

//[(1,0)deleting 0 elements from idx 1] & add the the rest elements
arr3.splice(1,0,1,2,3,4,5,6,7,8,9,10,11,12,13)
console.log(arr3)

//updating from index 1 , 3 elements will be deleted and added the 3 elemnet
arr3.splice(1,3,44,45,46)
console.log(arr3)


// what is diff b/w starting & ending 
let arr4=[1,2,3,4,5,6,7,8,9]

//                      start, end(end index is excluded)
// slice doesn't change the origin array
// splice change the original array
const subArr=arr4.slice(1,4)
console.log(subArr+"-"+arr4)

// Shallow copy and copy of the array
// Copy
let arr5=[1,2,3,4,5,6,7];
let arr6=[...arr5];
arr6.splice(1,4);
console.log('copy'+arr5+'\n'+arr6);

// Shallow copy (if we delete in the copy it will dlt in original array also)
const arr7=[1,2,3,4,5,6,7,8,9,10];
const arr8=arr7;
arr8.splice(1,3);
console.log('shallowCopy'+arr7+'\n'+arr8);

// copying using concat method
const arr10=[1,2,3,4,5,6,7,8,9,10];
const arr11=arr10.concat();
arr11.splice(1,3)
console.log(arr10+'\n'+arr11)


// How to add two array in js
const newArr=[...arr10,...arr11]
const newArr2=arr10.concat(arr11)
console.log(newArr)
console.log(newArr2)

// Q7 : How can you check if two arrays are equal?

const isArrayEqual=(arr12,arr13)=>{
    // method 1
    // if(arr12.length!==arr13.length){
    //     return false;
    // }
    // for(let i=0;i<arr12.length;i++){
    //     if(arr12[i]!==arr13[i]){
    //         return false;
    //     }
    // }
    // return true;

    return arr12.length===arr13.length&&arr12.every((ele,i)=>arr12[i]===arr13[i]);
}
console.log(isArrayEqual([1,2,3],[1,2,3]))

// .some() if one element equal to other return true;


// sort an array accending
const x=[1,3,6,-9,-5]
x.sort()
console.log(x);

// sort an array in descending
x.sort((a,b)=>b-a)
console.log(x)

// reverse
const a=[1,2,3,4,5,6];
a.reverse();
console.log(a)

const b=[1,2,3,4,5,6];
for(let i=b.length-1;i>=0;i--){
    process.stdout.write(b[i]+" ")
}
console.log('')

// Map, Filter & Reduce
// Map array
const newMapArr=b.map((ele,i,arr)=>ele*ele,console.log("ar"+arr+"ar"));
console.log(newMapArr);

// Filter array out element full the statement & pushed into newArray
const filterMapArr=b.filter((ele,i)=>ele>4);
console.log(filterMapArr)

// Reduce                                       intial value
const reduceArray=b.reduce((acc,curr)=>acc+curr,0);
console.log(reduceArray)

console.log(b+"Map,Filter,Reduce will affect the array b");

// flat
const array=[1,2,3,[4,5,6,[7,8,9],11],12,13]
//                  depth it should flat
const c=array.flat(4)
console.log(c)

// filter vs find
const d=[1,2,3,4,5];
const newDFilter=d.filter((ele,i)=>ele>2);
const newDfind=d.find((ele,i)=>ele>2);
console.log(newDFilter,newDfind)

// String in JS 
// collection of character is known as String
let firstName="Anand";
let anotherName="Anand"
console.log(firstName.length)

// access string element
console.log(firstName.charAt(2));
console.log(firstName[2])
console.log(firstName.charCodeAt(0))
console.log(firstName.charCodeAt(2))

console.log(firstName.includes("Anan"));
console.log(firstName.indexOf("a"));
console.log(firstName.lastIndexOf("a"))

// if not equal -1 and equal include some it (1) and if both are equal 0
console.log(firstName.localeCompare(anotherName));

let str="    Vishal is best backend Devloper,      Vishal is best backend Devloper"
console.log(str.replaceAll("Vishal","Anand"));
// regex

// substring of a string
console.log(str.substring(6,30));
console.log(str.slice(-10,-2)) //we can do for last index also in slice

console.log(str.search("is"))// return the index 
console.log(str.search("Subbu"))// if not present it will return -1

// The split() method in JavaScript divides a string into an array of substrings based on a specified separator.
console.log(str.split(" "));

// join 
let subString2=str.split(" ");
                        // joined by adding "+"
console.log(subString2.join("+"));
console.log(str.startsWith("Vishal"))
console.log(str.endsWith("Devloper"));
console.log(str.trim(" "));
console.log(str.trimStart(" "));
console.log(str.trimEnd(" "));
console.log(str.toLowerCase());
console.log(str.toUpperCase())
console.log(str);

const num=123;
console.log(num,num.toString())

// convert object to string
const obj={
    name:"Vishal",
    course:"DSA with Vishal"
}
console.log(JSON.stringify(obj))

// concat to string
const lastName="Rajput";
console.log(firstName.concat(lastName," is best"));
console.log(firstName+lastName)
console.log(`${firstName} ${lastName}`)


// Q28 https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

let haystack = "sadbutsad"
let needle="sad"
strStr(haystack,needle)

// Q344.Reverse String https://leetcode.com/problems/reverse-string/
var reverseString = function(s) {
    // inbuilt method
    return s.reverse();

    // let revs = [];
    // for (let i = s.length - 1; i >= 0; i--) {
    //     revs.push(s[i]);
    // }
    // return revs; // Returns a new reversed array
};

console.log(reverseString(["H","e","l","l","o"]))