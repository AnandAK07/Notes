// create Weather Constructor Object
function Weather(location,temperature,conditions) {
    this.location=location;
    this.temperature=temperature;
    this.conditions=conditions;
}

// Define a display() method for the Weather object
Weather.prototype.display=function(){
    return `current weather conditions for location ${this.location} having temperature ${this.temperature} degrees and weather condition is ${this.conditions}`
}
let bangalore=new Weather("Bangalore",36,"cloudy");
// Define a constructor for an Sunny object that inherits from Weather

// create Sunny Constructor Object
function Sunny(location,temperature) {
    this.location=location;
    this.temperature=temperature;
    this.conditions="sunny";
}
// Set up prototype inheritance for Sunny
let kanpur=new Sunny("Kanpur",44);
// Define a display() method for the Sunny object
Sunny.prototype.display=function(){
    return `we are at location ${this.location} temperature here is ${this.temperature} degrees weather condition is ${this.conditions}`;
}
// Define a constructor for a Sunny object that inherits from Weather

// create Rainy Constructor Object
function Rainy(location,temperature,precipitation) {
    this.location=location;
    this.temperature=temperature;
    this.precipitation=precipitation;
    this.conditions="rainy";
}
// Set up prototype inheritance for Rainy

let kerala=new Rainy("Kerala",30,"moist");
// Define a display() method for the Rainy object
Rainy.prototype.display=function(){
    return `we are at location ${this.location} temperature here is ${this.temperature} degrees weather condition is ${this.conditions} and precipitation is ${this.precipitation}`;
}
// Define a constructor for a Runner object that inherits from Weather
Rainy.prototype.setLocation=function(location){
    this.location=location;
} 
Rainy.prototype.setTemperature=function(temperature){
    this.temperature=temperature;
}
Sunny.prototype.setLocation=function(location){
    this.location=location;
} 
Sunny.prototype.setTemperature=function(temperature){
    this.temperature=temperature;
}
// !Note : Do not remove the following export statement
export { Weather, Sunny ,Rainy};
