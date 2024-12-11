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

console.log(reverseString(["H","e","l","l","o"]));

// Q14. Longest Common Prefix https://leetcode.com/problems/longest-common-prefix/description/ 
// strs = ["flower","flow","flight"] o/p fl
var longestCommonPrefix = function(strs) {
    strs.sort();
    let a=strs[0];
    let b=strs[strs.length-1];
    let result="";
    for(let i=0;i<a.length;i++){
        if(a[i]==b[i]){
            result+=a[i];
        }else{
            break;
        }
    }
    return result;
};


let word1="abc";
let word2="pqrel";

// word1 = "abc", word2 = "pqr"
// o/p "apbqcr"

var mergeAlternately = function(word1, word2) {
    let ans="";
    let m=word1.length;
    let n=word2.length;
    for(let i=0;i<Math.max(m,n);i++){
        if(i<m){
            ans+=word1[i];
        }
        if(i<n){
            ans+=word2[i];
        }
    }
    return ans;
};

// 58. Length of Last Word https://leetcode.com/problems/length-of-last-word/description/
let s = "   fly me   to   the moon  ";
function lastWord(s){
    return s.trim().split(" ").at(-1).length;
}
lastWord(s);

// Recursion
function fun(n){
    // T.C O(n)
    if(n==0)return;
    console.log(`fun`,n);
    fun(n-1);
}
fun(10);

// Q2 factorial
function factorial(n){
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(6));


// Q3 sum of Array

// function sumOfArray(array){
//     if(array.length===0)return 0;
//     // return array[array.length-1]+sumOfArray(array.slice(0,array.length-1));
//     let lastNo=array.pop();
//     return lastNo+sumOfArray(array)
// }

// method 3
function sumOfArray(array,n){
    if(n===0)return 0;
    return arr[n-1]+sumOfArray(array,n-1);
}

console.log(sumOfArray([1,2,3,4,5],5))

// find the product of the array
function prodFun(array,n){
    if(n==0) return 1;
    return array[n-1]*prodFun(array,n-1)
}

console.log(prodFun([1,2,3,4,5],5))

function fibonacciRecursion(n){
    if(n<2) return n;
    return fibonacciRecursion(n-1)+fibonacciRecursion(n-2);
}

console.log(fibonacciRecursion(6))
// fibonacciRecursion(5) 0 1 1 2 3 5


// linear search(2:49) 
const larr=[1,2,3,4,5,9,2,4,5,0,-3];

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target)return i;
    }
    return -1;
}

console.log(linearSearch(larr,9));
console.log(larr.indexOf(9));
console.log(larr.includes(9))
console.log(larr.find((num)=>num>0));//num will be found
console.log(larr.findIndex((num)=>num<0))//num's index will be found


// 28. Find the Index of the First Occurrence in a String https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle);
    let m=haystack.length,n=needle.length;
    for(let i=0;i<=m-n;i++){
        let flag=true;
        for(let j=0;j<n;j++){
            if(haystack[i+j]!=needle[j]){
                flag=false;
                break;
            }
        }
        if(flag){
            return i;
        }
    }
    return -1;
};


function binarySearch(arr,k){
    let low=0,high=arr.length-1;
    while(low<=high){
        let mid=low+Math.floor((high-low)/2);
        if(arr[mid]==k){
            return mid;
        }else if(k<arr[mid]){
            high=mid-1;
        }else if(k>arr[mid]){
            low=mid+1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,7,8,10,13,14,16,17],6));


function binarySearchRecursion(arr,target,low,high){
    if(low>high){
        return -1;
    }
    let mid=low+Math.floor((high-low)/2)
    if(arr[mid]==target){
        return mid;
    }else if(target<arr[mid]){
        return binarySearchRecursion(arr,target,low,mid-1)
    }else if(target>arr[mid]){
        return binarySearchRecursion(arr,target,mid+1,high);
    }
}

console.log(binarySearchRecursion([1,2,3,4,5,6,7,8,10,11,14],11,0,10),'binaryRecursion');



var searchInsert = function(nums, target) {
    let low=0;
    let high=nums.length-1;
    while(low<=high){
        let mid=low+Math.floor((high-low)/2);
        if(nums[mid]==target){
            return mid;
        }else if(target<nums[mid]){
            high=mid-1;
        }else if(target>nums[mid]){
            low=mid+1;
        }
    }       
        // CEIL(low),FLOOR(high)
    return low;
};
console.log(searchInsert([1,2,4,5,6,8,9,15,16,19],10))


// Objects in js
const person={
    name:"Anand",
    "class":12,
    role:"Backend devloper",
    isStudent:false,
    isWorking:false,
    skill:["javaScript","Express.js","Node.js","MongoDB"],
    codeFun:function(){
        console.log('Normal function')
    },
    arrowFun:function(){
        console.log('Arrow Funtion')
    }
}

// How to access

// Dot operator
console.log(person.name);

// []
console.log(person["name"]);
console.log(person.class);
person.codeFun()
person.arrowFun();

// how to find the key in object
console.log(person.hasOwnProperty("name"));
person.name="AnandAk";
console.log(person.name);

// how to add new property
person.location="Bangalore";
console.log(person.location);

// Shallow copy
const person2=person;
person2.isStudent=true;
console.log(person.isStudent)
console.log(person2.isStudent)

// Deep copy
const person3=Object.assign({},person);
person3.isWorking=true;
console.log(person3.isWorking);
console.log(person.isWorking)

// freeze: We can't able to add,delete,update
// Object.freeze(person);
person.name="Manju";
console.log(person.name)
console.log(Object.isFrozen(person));

// freeze: We can't able to add,delete but able to update
Object.seal(person);
person.name="Hemanth";
console.log(person.name);
console.log(Object.isSealed(person));


// keys,values,enteries
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person))


// loop through an object 
// for ... in

for(let key in person){
    console.log(key+":"+person[key])
}

Object.keys(person).forEach((key)=>console.log(key))

console.log(Object.is(person,person3))

for(let key in person){
    if(person[key]!==person3[key]){
        console.log('person & person3 are not equal');
    }
}















































// Sorting in Js

// Sort an Array
const sarr=[-1,-5,-10,1000,6];
console.log(sarr.sort())//[ -1, -10, -5, 1000, 6 ] it will convert arr elements as numbers sort it


console.log(sarr.sort((a,b)=>a-b))//[ -10, -5, -1, 6, 1000 ]
console.log(sarr.sort((a,b)=>b-a))//desending [ 1000, 6, -1, -5, -10 ]


const sstr=["apple","fox","anand","cat","ball"];
console.log(sstr.sort()) //works fine [ 'anand', 'apple', 'ball', 'cat', 'fox' ]

const sstr1="Vishal";
// console.log(sstr1.sort()) it's wrong sort is not a function
console.log(sstr1.toLowerCase().split("").sort().join(""))

































// Sorting Algo

// bubble sort
const bubbleSort=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                // let temp=arr[j];
                // arr[j]=arr[j+1];
                // arr[j+1]=temp
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr)
}
bubbleSort([6,2,7,8,9,1,3]);

const selectionSort=(arr)=>{
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIdx=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIdx]){
                minIdx=j;
            }
        }
        if(minIdx!==i){
            let temp=arr[i];
            arr[i]=arr[minIdx];
            arr[minIdx]=temp;
        }
    }
    console.log(arr)
}

selectionSort([1,4,2,3,5,8,7,5])




function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i-1;
        let x=arr[i];
        while(j>=0&&arr[j]>x){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=x;
    }
    console.log(arr,"insertionSort")
}

insertionSort([1,2,5,3,4,9,8,7,6])

const mergeSort=(arr)=>{
    if(arr.length<2){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));

    return merge(left,right);
}

const merge=(left,right)=>{
    let result=[];
    let leftIndex=0,rightIndex=0;
    while(leftIndex<left.length&&rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    while(leftIndex<left.length){
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length){
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

console.log(mergeSort([1,4,2,3,6,5,8,9,10]),'merge sort')


const quickSort=(arr)=>{
    if(arr.length<=1){
        return arr;
    }
    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([1,3,2,7,4,5,9,8]),'quicksort');


// Map in JavaScript

const map=new Map();
// const object1=new Object();
const object2={};

obj["name"]="Vishal";
obj["age"]=21;
map.set("name","Anand");
map.set(21,"age");
map.set(true,"isEducated");

console.log(map.delete("name"))
console.log(map.has("name"));
console.log(map.get(21))

map.forEach((value,key)=>{
    console.log(`${key}:${value}`)
})

// obj.forEach will not work
Object.keys(obj).forEach((key,value)=>{
    console.log(`${key}--${value}`)
})

                // return the keys 
for(let value of map.keys()){
    console.log(value)
}

map.clear();
console.log(map)

// Performance of Map & Object

const obj2={};
const array1=[1000000000].fill(0).map(()=>Math.random()*100000);

console.time(`Obj time`)

for(let i=0;i<array1.length;i++){
    obj2[i]=array1[i];
};
console.timeEnd(`Obj time`)

const map2=new Map();

console.time(`Map time`)

for(let i=0;i<array1.length;i++){
    map2.set(array1[i])
};
console.timeEnd(`Map time`)



// Weak Map in Js
let obj3={"name":"Anand"}
const map3=new Map();
map3.set(obj3,'metadata');
console.log(map3)
obj3=null;
console.log(map3);

// Weak ex
let obj4={"name":"manju"}
let weakmap=new WeakMap();
weakmap.set(obj4,'metadata2');
console.log(weakmap);
obj4=null;
console.log(weakmap)

// Weak map stores only functions & obj only
// Map stores numbers,string all the data type


// Set in Js(it returns only the uniq value)

const set=new Set([1,2,3,1,2,3,4,8,6,7,5]);
set.add(45);
console.log(set)
set.delete(1);
console.log(set.has(2))
console.log(set)

for(let x of set.keys()){
    console.log(x,'keys()')
}

for(let x of set.values()){
    console.log(x,'values()')
}

set.forEach((value)=>console.log(value))
console.log(set.size,'size')
// 1.Map can store any data type but obj can store only "string" as a key
// 2.Map is iterable
// 3.Map is used to store key and value but obj methods and function can also be stored
// 4.can find the size of the map but not the obj

set.clear();
console.log(set)

// Q1: Union of 2 array(No duplicate values)
const arra1=[1,2,3,4,5];
const arra2=[1,2,4,6,7];

console.log(new Set([...arra1,...arra2]));
console.log([...new Set([...arra1,...arra2])]);


// 451. Sort Characters By Frequency https://leetcode.com/problems/sort-characters-by-frequency/description/

var frequencySort = function(s) {
    const map=new Map();
    for(let ch of s){
      map.set(ch,(map.get(ch)||0)+1);
    }
  
    const sortedArray=[...map.keys()].sort((a,b)=>map.get(b)-map.get(a));
  
    let resultString="";
    for(let ch of sortedArray){
      resultString+=ch.repeat(map.get(ch));
    }
  
    return resultString;
  };

// 349. Intersection of Two Arrays https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function(nums1, nums2) {
    //   let result=[];
    //   for(let i=0;i<nums1.length;i++){
    //     for(let j=0;j<nums2.length;j++){
    //         if(nums1[i]==nums2[j]&&!result.find((x)=>x==nums1[i])){
    //             result.push(nums1[i]);
    //             break;
    //         }
    //     }
    
        let result=new Set();
        let nums2Set=new Set(nums2);
        for(let i=0;i<nums1.length;i++){
            if(nums2Set.has(nums1[i])&& !result.has(nums1[i])){
                result.add(nums1[i]);
            }
        }
        return [...result];
    };




    // Linked List 


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    insertAtHead(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode
    }

    print(){
        let result="";
        let temp=this.head;
        while(temp){// or temp!=null 
            result+=`${temp.data}->`;
            temp=temp.next;
        }
        return result
    }
}

let list=new LinkedList();
list.insertAtHead(43)
list.insertAtHead(34)
list.insertAtHead(13)
console.log(list.print())
console.log(list)


// 876. Middle of the Linked List https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function(head) {
    let slow=head,fast=head;
    while(fast&&fast.next){
        fast=fast.next.next;
        slow=slow.next;
    }
    return slow;
};

// 141. Linked List Cycle https://leetcode.com/problems/linked-list-cycle/description/

var hasCycle = function(head) {
    let slow=head,fast=head;
    while(fast&&fast.next){
        fast=fast.next.next;
        slow=slow.next;

        if(slow==fast){
            return true;
        }
    }
    return false;
};


// 206. Reverse Linked List https://leetcode.com/problems/reverse-linked-list/description/

var reverseList = function(head) {
    let prev=null,curr=head,temp;
    while(curr){
        temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    return prev;
};