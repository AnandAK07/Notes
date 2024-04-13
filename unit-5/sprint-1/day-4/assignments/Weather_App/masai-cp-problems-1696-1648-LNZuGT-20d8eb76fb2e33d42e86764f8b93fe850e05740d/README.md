# JS-Prototypal-inheritance-Weather-app

  ## Submission Instructions [Please note]

  ## Maximum Marks - 11
  - The Submission should not contain spaces, for example /js-101 folder/eval will not work
  - Do not push node_modules and package_lock.json to GitHub
  ```
  ✅ able to submit the app - 1 mark ( minimum score )
  ### Weather Object
  ✅should create a new Weather with the correct location, temperature, and conditions- 1 mark
  ✅ should display with a correct message for Weather object - 1 mark
  ### Testcases for Sunny Object
  ✅should create a new Sunny object  with the correct location, temperature, and conditions properties - 1 mark
  ✅ should display with the correct message for Sunny object - 1 mark
  ### Testcases for Rainy Object
  ✅should create a new Rainy object  with the correct location, temperature, and conditions properties - 1 mark
  ✅ should display with the correct message for Rainy object - 1 mark
  ### Test cases for the setLocation and setTemperature
  ✅ Checks for the setLocation and setTemperature on Sunny Object - 2 marks
  ✅ Checks for the setLocation and setTemperature  on Rainy Object - 2 marks
  ```
## Installation
- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Run **npm install --engine-strict** to install the node modules
- Run **npm test** for the test cases

## Description
The application is a simple weather app that displays the current weather conditions for a given location. The app should allow the user to create two types of weather objects: "sunny" and "rainy". Each weather object should have a location, temperature, and conditions property. The app should also allow the user to update the location and temperature of each weather object after it has been created.

## Boilerplate
- Do not change the given folder structure
- inside src, you will find the `index.js` file that is where you need to write the code
- you can find the test case under `__tests__ ` folder.

### Problem Statement
- Define a constructor for a ***Weather object*** that takes three parameters 
    1. `location`
    2. `temperature` 
    3. `conditions` 

- The constructor should create a new object with the given location, temperature, and conditions.
- Define a method for the Weather object called ***`display`*** that ***`returns`*** a string with the `location` ,`temperature`,  and `conditions` of the weather.

- Create instances of the above objects and call their respective methods to verify their functionality.

- console.log(Weather.display())
  - output : `current weather conditions for location {location} having temperature {temperature} degrees and weather condition is {conditions}`

### Points to note for Sunny Object :
- Define a constructor for a `Sunny` object , that inherits from Weather and takes two parameters and one default value.
  1. location,
  2. temperature
  3. conditions (should have `sunny` as the default value)

- The constructor should create a new Sunny object with the given location, temperature and conditions (should have `sunny` as   the default value)
- Define a method for the Sunny object called ***`display`*** that ***`returns`*** a string with the `location` ,`temperature`, and `conditions` of the weather.

- Create instances of the above objects and call their respective methods to verify their functionality.
- create an instance of the Sunny

- console.log(sunny.display())
  - output : `we are at location {location} temperature here is {temperature} degrees weather condition is {conditions}`

### Points to note for Rainy Object :
- Define a constructor for a `Rainy` object , that inherits from Weather and takes three parameters and one default value.
  1. location,
  2. temperature
  3. precipitation
  4. conditions (should have `rainy` as the default value)

- The constructor should create a new Rainy object with the given location, temperature,precipitation, and conditions (should have `rainy` as the default value)
- Define a method for the Rainy object called ***`display`*** that ***`returns`*** a string with the `location` ,`temperature`, `conditions`, and `precipitation` of the weather.

- Create instances of the above objects and call their respective methods to verify their functionality.
- create an instance of the Rainy

- console.log(rainy.display())
  - output : `we are at location {location} temperature here is {temperature} degrees weather condition is {condition} and precipitation is {precipitation}`
  
- The app should allow the user to create a new "sunny" or "rainy" weather object by calling the appropriate constructor function and passing in the necessary arguments.

### Points to note to setLocation and setTemperature :
- To ***update the location and temperature*** of each **weather object** by calling the ```setLocation``` and `setTemperature` methods on the `sunny` and `rainy` objects.
- The app should output the current weather conditions for each object after they have been `created and after any updates have been made`.

#### General guidelines
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time.