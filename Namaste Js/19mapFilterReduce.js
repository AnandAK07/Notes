const arr=[5,2,2,3,4,10];
// map is a higher order function used to transfer the array

// ex:double/triple/square the array 
const op=arr.map((x)=>{return x*2})
console.log(op)

// filter it will filter the array
const op2=arr.filter((x)=>{return x<5})
console.log(op2)


// 3 reduce it will receive one function & intializer of acc as a argument

// example of sum of all the element in a array
const op3=arr.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
},0)
console.log(op3)
const op4=arr.reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr]++;
    }else{
        acc[curr]=1;
    }
    return acc;
},{})
console.log(op4)

const users = [
	{ firstName: "Akshay", lastName: "Saini", age: 26 },
	{ firstName: "Donald", lastName: "Trump", age: 75},
	{ firstName: "Elon", lastName: "Must", age: 50},
	{ firstName: "Deepika", lastName: "Padukone", age: 28},
    {firstName:"Danu"}
];

const op5=users.filter((x)=>{
    return x.age>25;
}).map((x)=>{return x.firstName})
console.log(op5);




// return age less then 30 with firstname
const output = users.reduce(function(acc, curr) {
	if (curr.age < 30) {
		acc.push(curr.firstName);
	}
	return acc;
} , [ ] );
console.log(output); 




// Find the user with firstName "Danu"
const user = users.find(user => user.firstName === "Danu");

// Add age if the user is found
if (user) {
    user.age = 25;
}

console.log(users);
