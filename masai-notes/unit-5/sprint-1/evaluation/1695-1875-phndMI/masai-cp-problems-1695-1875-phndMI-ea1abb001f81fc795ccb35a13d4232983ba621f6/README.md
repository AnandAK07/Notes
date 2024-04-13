## Weather-Athlete-Person inheritance (🌦️-🤾‍♂️-👩‍💼)
### Submission Instructions [Please note]
## Maximum Marks - 27

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub
### Problem1 Test cases
```
 ✅ able to submit the app - 1 mark ( minimum score )
### Weather Constructor function
 ✅should create a new Weather Constructor function with the correct location, temperature, and conditions- 1 mark
 ✅ should display with a correct message for the Weather - 1 mark
### Testcases for Sunny Constructor function
 ✅should create a new Sunny object using the Constructor function with the correct location, temperature, and conditions properties - 1 mark
 ✅ should display the correct message for Sunny object - 1 mark
### Testcases for Rainy Constructor function
 ✅should create a new Rainy object using the Constructor function with the correct location, temperature, and conditions properties - 1 mark
 ✅ should display with the correct message for Rainy object - 1 mark
### Test cases for the setLocation and setTemperature
 ✅ Checks for the setLocation and setTemperature on Sunny Object - 2 marks
 ✅ Checks for the setLocation and setTemperature on Rainy Object - 2 marks
```
### Problem2 Testcases
```
### Test cases for the Athlete Constructor function
  ✅ Create Athlete Constructor function and initializes with properties name, age, and sport - 1 mark
  ✅ Athlete have methods to train, and compete and should display the correct message - 1 mark
### Testcase for Runner Constructor function
  ✅ Create Runner Constructor function and initializes with properties name, age, sport, and distance - 1 mark
  ✅ Runner have methods to train, and compete and should display the correct message - 1 mark
### test cases for the swimmer Constructor function
  ✅ Create Swimmer Constructor function and initializes with properties name, age, sport, SwimmingStyle - 1 mark
  ✅ Swimmers have methods to train, and compete and should display the correct message - 1 mark
```
### Problem3 Testcases
```
### Testcases for Person
  ✅ Create Person Constructor function and initializes with properties name, age, gender - 1 mark
  ✅ Person have method displayInfo should display with the correct message - 1 mark
### Testcases for Student
  ✅ Create a Student Constructor function and initializes with properties name, age, gender, StudentID, Major - 1 mark
  ✅ Student have method displayInfo, enroll and drop should display with the correct message - 3 marks
### Testcases for Professor
  ✅ Create Professor Constructor function and initializes with properties name, age, gender, professorID, department - 1 mark
  ✅ Professor has method displayInfo, teach and grade should display with correct message -3 marks
```
## Installation
- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Run **npm install --engine-strict** to install the node modules
- Run **npm test** for the test cases

## Boilerplate
- Do not change the given folder structure
- inside src, you will find the `index.js` file that is where you need to write the code
- you can find the test case under `__tests__ ` folder.

`### Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part`

### Description
- <span style="color: green">**For all Constructor functions use key names the same as input parameters.**</span>

## **Problem 1**

```
Weather
  |──display()
  |──Sunny  
  |     └──display()
  |     └──setLocation()
  |     └──setTemperature()
  └── Rainy  
        └──display() 
        └──setLocation() 
        └──setTemperature() 

```

- Define a constructor function **_Weather_** that takes three input parameter
  1. location: string
  2. temperature: number
  3. conditions: string,

 Where key names of the Weather object are the same as the above input parameters

- The constructor function should create a new object with the given location, temperature, and conditions.
- Define a method for the Weather constructor function called **_`display`_** that **_`returns`_** a string as `current weather conditions for location {location} having temperature {temperature} degrees and weather condition is {conditions}`

Example usage for Weather

```
const weather1 = new Weather("Pune",38, "heavy")
console.log(weather1)//Weather { location: 'Pune', temperature: 38, conditions: 'heavy' }
console.log(weather1.display())//current weather conditions for location Pune having temperature 38 degrees and weather condition is heavy
```

### Points to note for Sunny Object :
- Define a constructor function `Sunny`, that inherits from *Weather* and takes three parameters.
  1. location: string
  2. temperature: number
  3. conditions (should have `sunny` as the default value) : string

 Where key names of the Sunny object are the same as the above input parameters
  

- The constructor function should create a new Sunny object with the given location, temperature, and conditions (should have `sunny` as the default value)
- Define a method for the Sunny called **_` display`_** that **_`returns`_** a string as `we are at location {location} temperature here is {temperature} degrees weather condition is {conditions}`

Example usage for Sunny

```
const sunny1 = new Sunny("Bengaluru",29)
console.log(sunny1)//Sunny { location: 'Bengaluru', temperature: 29, conditions: 'sunny' }
console.log(sunny1.display())//we are at location Bengaluru temperature here is 29 degrees weather condition is sunny
```

### Points to note for Rainy Object :

- Define a constructor function `Rainy`, that inherits from Weather and takes four parameters.
  1. location: string
  2. temperature: number
  3. precipitation: string
  4. conditions (should have `rainy` as the default value) : string

   Where key names of the Rainy object are the same as the above input parameters

- The constructor should create a new Rainy object with the given location, temperature, precipitation, and conditions (should have `rainy` as the default value)
- Define a method for the Rainy object called **_`display`_** that **_`returns`_** a string as `we are at location {location} temperature here is {temperature} degrees weather condition is {conditions} and precipitation is {precipitation}`

- Create instances of the above objects and call their respective methods to verify their functionality.
<!-- - create an instance of the Rainy -->

Example usage for Rainy

```
const rainy1 = new Rainy("Mumbai",31, "light")
console.log(rainy1)//Rainy {location: 'Mumbai', temperature: 31, conditions: 'rainy', precipitation: 'light'}
console.log(rainy1.display())//we are at location Mumbai temperature here is 31 degrees weather condition is rainy and precipitation is light 
```

### setLocation and setTemperature methods :

- To **_update the location_** of the object using the `setLocation` methods on the `sunny` and `rainy` objects.
- To **_update the temperature_** of the object using the `setTemperature` methods on the `sunny` and `rainy` objects.

for better understanding refer below examples

### Example usage for setLocation and setTemperature

```
const sunny1 = new Sunny("Bengaluru",29)
console.log(sunny1)//Sunny { location: 'Bengaluru', temperature: 29, conditions: 'sunny' }
```

you can use the setLocation method to change Sunny and Rainy objects.

```
### Here we want to change location from Bengaluru ---> NewYork
sunny1.setLocation("NewYork");
console.log(sunny1)//Sunny { location: 'NewYork', temperature: 29, conditions: 'sunny' }
```
you can use the setTemperature method to change on Sunny and Rainy objects.

```
### Here we want to change the temperature from 29 ---> 44
sunny1.setTemperature(44);
console.log(sunny1)//Sunny { location: 'NewYork', temperature: 44, conditions: 'sunny' }

```
  
## **Problem 2**

```
Athlete
  |──train()
  |──compete()
  |──Runner   
  |     └──train()
  |     └──compete()
  └── Swimmer 
        └──train()
        └──compete()
```


- You are tasked with building a sports management system to keep track of athletes and their training and competition activities. The system should be able to handle different types of athletes, such as runners and swimmers, and their specific training and competition details.

### 1. _Athlete_ :

- Define a constructor function for an `Athlete` that takes input as the athlete's name, age, and sport as input parameters -

1.  name: string,
2.  age: number,
3.  sport: string
 Where key names of the Athlete object are the same as the above input parameters

- The "Athlete" function should have a _`train`_ method that **`return`** a message as `athlete {name} is training for {sport}` indicating that the athlete is training.
- The "Athlete" function should have a _`compete`_ method that **`return`** a message as `athlete {name} is competing for {sport}` indicating that the athlete is competing.

### Example usage for Athlete 

```
const athlete1 = new Athlete("Sachin",58, "Balloon Snatch")
console.log(athlete1)//Athlete { name: 'Sachin', age: 58, sport: 'Balloon Snatch' }
console.log(athlete1.train())//athlete sachin is training for Balloon Snatch
console.log(athlete1.compete())//athlete Sachin is competing for Balloon Snatch
```

### 2. _Runner_:

- The `Runner` constructor function should inherit from the "_Athlete_" that takes in `additional parameters`, such as the distance the runner is training for or competing in.

1.  name: string,
2.  age: number,
3.  sport: string,
4.  distance: number
 Where key names of the Runner object are the same as the above input parameters

- The "Runner" constructor function should override the _`train`_ method **`return`** a message as `athlete {name} is training for distance of {distance}m` 
- The "Runner" constructor function should override the _`compete`_ method **`return`** a message as `athlete {name} is competing for distance of {distance}m` 

### Example usage for Runner 

```
const runner1 = new Runner ("Lionel Messi",37, "running",200)
console.log(runner1)//Runner {name: 'Lionel Messi', age: 37, sport: 'running', distance: 200}
console.log(runner1.train())//athlete Lionel Messi is training for distance of 200m
console.log(runner1.compete())//athlete Lionel Messi is competing for distance of 200m
```

### 3. _Swimmer_:

- The `Swimmer` constructor function should inherit from the "Athlete" that takes in `additional parameters`, such as the SwimmingStyle the swimmer is training or competing in.

1.  name: string,
2.  age: number,
3.  sport: string,
4.  SwimmingStyle: string
 Where key names of the Swimmer object are the same as the above input parameters

- The "Swimmer" constructor function should override the _`train`_ methods **`return`** a message an `athlete {name} is training for swimming with style of {SwimmingStyle}`
- The "Swimmer" constructor function should override _`compete`_ methods **`return`** a message an `athlete {name} is competing for swimming with style of {SwimmingStyle}`
- inherited from the "Athlete", and provides its implementation that includes the SwimmingStyle information.

### Example usage for Swimmer 

```
const swimmer1 = new Swimmer ("Cristiano Ronaldo",23, "swimming", "backward");
console.log(swimmer1);//Swimmer {name: 'Cristiano Ronaldo', age: 23, sport: 'swimming', SwimmingStyle: 'backward'}
console.log(swimmer1.train());//athlete Cristiano Ronaldo is training for swimming with style of backward
console.log(swimmer1.compete());//athlete Cristiano Ronaldo is competing for swimming with style of backward
```

### 4. _Usage_: (`No need to create anything in this part we are only checking to access and modify the properties`).
- The system should allow the creation of instances of the "Runner" and "Swimmer" constructor function with appropriate parameters, such as name, age, sport, distance, and SwimmingStyle.

## **Problem 3**

```
Person
  |──displayInfo()
  |──Student   
  |     └──displayInfo()
  |     └──enroll(course)
  |     └──drop(course)
  └── Professor 
        └──displayInfo()
        └──teach(course)
        └──grade(student, course, grade)
```

- A university wants to manage student and professor information using a JavaScript program. They need a system that allows them to create and manage student and professor objects with different properties and methods.

### 1. _Person_:
- Create a constructor function called **`Person`** with the following input parameters:

  1. name: string
  2. age: number
  3. gender: string
Where key names of the Person object are the same as the above input parameters

- The "Person" function should have a _`displayInfo`_ method that **`return`** a string as `Name: {name}, Age: {age}, Gender: {gender}`

### Example usage for Person 

```
const person1 = new Person("Sania Mirza",39,"female")
console.log(person1)//Person { name: 'Sania Mirza', age: 39, gender: 'female' }
console.log(person1.displayInfo())//Name: Sania Mirza, Age: 39, Gender: Female
```
### 2. _Student_:
- Create a constructor function called **`Student`** that inherits from the "Person" with the following `additional properties` as StudentID, Major , and Courses:

  1. name: string
  2. age: number
  3. gender: string
  4. StudentID : string
  5. Major: string
  6. Courses : [] (array - to store the courses enrolled by the student)

Where key names of the Student object are the same as the above input parameters  

- Methods:
  - `displayInfo()` -  **`return`** a string as `Name: {name}, Age: {age}, Gender: {gender}, Student ID: {StudentID}, Major: {Major}, Courses: {Courses}`

  - `enroll()` - accepts a course name as an argument and adds it to the list of enrolled courses for the student.
      - example : enroll(course name)

  - `drop()` - accepts a course name as an argument and removes it from the list of enrolled courses for the student.
    - example : drop(course name)

  - _the default value of Courses as [] by using the method `enroll(course)` we are pushing a new course to the existing Courses array and by using the method `drop(course)` we are removing the particular course from existing Courses array_

- Note: while returning the Courses array in the displayInfo method directly use `Courses: ${this.Courses}` it will give you required courses separated with `","` or you can go for `Courses: ${this.Courses.join(",")}`.

### Example usage for Student
```
const student1 = new Student ("Dipa",25, "female",465612, "commerce")
console.log(student1)//Student {name: 'Dipa', age: 25, gender: 'female', StudentID:465612, Major: 'commerce', Courses: []}

### enroll method
student1.enroll("math")
student1.enroll("bio")
console.log(student1)//Student {name: 'Dipa', age: 25, gender: 'female', StudentID:465612, Major: 'commerce', Courses: [ 'math', 'bio' ]}

### drop method
student1.drop("math")
console.log(student1)//Student {name: 'Dipa', age: 25, gender: 'female', StudentID:465612, Major: 'commerce', Courses: [ 'bio ]}
```
### 3. _Professor_:
- Create a constructor function called **`Professor`** that inherits from the "Person" constructor function with the following `additional properties` as professorID and department:
  1. name: string
  2. age: number
  3. gender: string
  4. professorID: string
  5. department: string

Where key names of the Professor object are the same as the above input parameters

- Methods:

   - `displayInfo()` -  **`return`** a string as `Name: {name}, Age: {age}, Gender: {gender}, Professor ID: {professorID}, Department: {department}`

   - `teach()` - accepts a course name as an argument and **`returns`** a string as `{name} is teaching {course}`
     - example : teach(course name) 

  - `grade()` - accepts student name, course name, and grade as arguments and **`return`** a string as `{name} is grading {student}'s performance in {course} with the grade {grade}`
      - example : grade(student, course, grade) 

### Example usage for Professor
```
const professor1 = new Professor("Sharma",78, "male",983, "physics")
console.log(professor1)//Professor {name: 'Sharma', age: 78, gender: 'male'professorID: 983, department: 'physics'}
console.log(professor1.displayInfo())//Name: Sharma, Age: 78, Gender: male, Professor ID: 983, Department: Physics

### teach method
console.log(professor1.teach("general relativity"))// Sharma is teaching general relativity

### grade method
console.log(professor1.grade("john", "JEE", "A"))//Sharma is grading john's performance in JEE with the grade A
```

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time.
