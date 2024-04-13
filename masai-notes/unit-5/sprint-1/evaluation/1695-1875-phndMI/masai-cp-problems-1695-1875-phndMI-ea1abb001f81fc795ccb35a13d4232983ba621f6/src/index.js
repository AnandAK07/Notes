//**********************Problem 1 */

function Weather(location,temperature,conditions) {
  // create Weather Constructor function
  this.location=location;
  this.temperature=temperature;
  this.conditions=conditions;
  // Define a display() method for the Weather
  this.display=function(){
    return `current weather conditions for location ${this.location} having temperature ${this.temperature} degrees and weather condition is ${this.conditions}`
  }
}
const weather1 = new Weather("Pune",38, "heavy");
console.log(weather1);

function Sunny(location,temperature) {
  // Define Sunny Constructor function that inherits from Weather
  this.location=location,
  this.temperature=temperature,
  this.conditions=`sunny`
  // Set up prototype inheritance for Sunny
  // Define a display() method for the Sunny
  this.display=function(){
    return `we are at location ${this.location} temperature here is ${this.temperature} degrees weather condition is ${this.conditions}`
  }
}
const sunny1 = new Sunny("Bengaluru",29);
console.log(sunny1);

function Rainy(location,temperature,precipitation) {
  // create Rainy Constructor function that inherits from Weather
  this.location=location,
  this.temperature=temperature,
  this.precipitation=precipitation,
  this.conditions =`rainy`
  // Set up prototype inheritance for Rainy
  // Define a display() method for the Rainy
  this.display=function(){
    return `we are at location ${this.location} temperature here is ${this.temperature} degrees weather condition is ${this.conditions} and precipitation is ${this.precipitation}`
  }
}
const rainy1 = new Rainy("Mumbai",31, "light");
console.log(rainy1)


//**************************************Problem 2 */
function Athlete(name,age,sport) {
  // create Athlete Constructor function
  this.name= name;
  this.age= age;
  this.sport= sport;
  // Define a train() method for the Athlete
  this.train=function(){
    return `athlete ${this.name} is training for ${this.sport}`;
  }
  // Define a compete() method for the Athlete
  this.compete=function(){
    return `athlete ${this.name} is competing for ${this.sport}`
  }
}
const athlete1 = new Athlete("Sachin",58, "Balloon Snatch")
console.log(athlete1)

function Runner(name,age,sport,distance) {
  // create Runner Constructor function that inherits from Athlete
  this.name=name,
  this.age= age,
  this.sport= sport,
  this.distance= distance,
  // Set up prototype inheritance for Runner
  // Define a train() method for the Runner
  this.train=function(){
    return `athlete ${this.name} is training for distance of ${this.distance}m`
  }
  // Define a compete() method for the Runner
  this.compete=function(){
    return `athlete ${this.name} is competing for distance of ${this.distance}m`
  }
}
const runner1 = new Runner ("Lionel Messi",37, "running",200)
console.log(runner1)//Runner {name: 'Lionel Messi', age: 37, sport: 'running', distance: 200}
console.log(runner1.train())//athlete Lionel Messi is training for distance of 200m
console.log(runner1.compete())//athlete Lionel Messi is competing for distance of 200m


function Swimmer(name,age,sport,SwimmingStyle) {
  // create Swimmer Constructor function that inherits from Athlete
  this.name= name,
  this.age= age,
  this.sport= sport,
  this.SwimmingStyle= SwimmingStyle
  // Set up prototype inheritance for Swimmer
  // Define a train() method for the Swimmer
  this.train=function(){
    return `athlete ${this.name} is training for swimming with style of ${this.SwimmingStyle}`
  }
  // Define a compete() method for the Swimmer
  this.compete=function(){
    return `athlete ${this.name} is competing for swimming with style of ${this.SwimmingStyle}`
  }
}
const swimmer1 = new Swimmer ("Cristiano Ronaldo",23, "swimming", "backward");
console.log(swimmer1);
console.log(swimmer1.train());
console.log(swimmer1.compete());

//**************************************Problem 3 */

function Person(name,age,gender) {
  // create Person Constructor function
  this.name= name
  this.age= age
  this.gender= gender
  // Define a displayInfo() method for the Person
  this.displayInfo=function(){
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`
  }
}
const person1 = new Person("Sania Mirza",39,"female")
console.log(person1)


function Student(name,age,gender,StudentID,Major) {
  // create Student Constructor function that inherits from Person
  this.name= name,
  this.age=age,
  this.gender=gender,
  this.StudentID =StudentID,
  this.Major=Major
  // this.Courses = [] (array - to store the courses enrolled by the student)
  // Set up prototype inheritance for Student
  // Define a displayInfo() method for the Student
  this.displayInfo=function(){
     return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Student ID: ${this.StudentID}, Major: ${this.Major}, Courses: ${this.Courses}`
  }
  // Define a enroll() method for the Student
  
  // Define a drop() method for the Student
}
const student1 = new Student ("Dipa",25, "female",465612, "commerce")
console.log(student1)


function Professor(name,age,gender,professorID,department) {
  // create Professor Constructor function that inherits from Person
  this.name= name,
  this.age= age,
  this.gender=gender,
  this.professorID= professorID,
  this.department= department
  // Set up prototype inheritance for Professor
  // Define a displayInfo() method for the Professor
  this.displayInfo=function(){
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Professor ID: ${this.professorID}, Department: ${this.department}`
  }
  // Define a teach() method for the Professor
  this.teach=function(){
    return `${this.name} is teaching ${this.course}`
  }
  // Define a grade() method for the Professor
  this.grade=function(){
    return `${this.name} is grading ${this.student}'s performance in ${this.course} with the grade ${this.grade}`
  }
}
const professor1 = new Professor("Sharma",78, "male",983, "physics")
console.log(professor1)

//Don't change below export statement
module.exports = {
  Weather,
  Sunny,
  Rainy,
  Person,
  Student,
  Professor,
  Athlete,
  Runner,
  Swimmer,
};
