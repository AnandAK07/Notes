const {
  Weather,
  Sunny,
  Rainy,
  Person,
  Student,
  Professor,
  Athlete,
  Runner,
  Swimmer,
} = require("../index");

global.score = 1;

//### Weather Constructor function
describe("Weather object", () => {
  test("should create a new Weather Constructor function with the correct location, temperature, and conditions", () => {
    const weather = new Weather("New York", 23, "heavy");
    expect(weather.location).toBe("New York");
    expect(weather.temperature).toBe(23);
    expect(weather.conditions).toBe("heavy");
    global.score += 1;
  });

  test("should display with a correct message for the Weather", () => {
    const weather = new Weather("New York", 23, "heavy");
    const expectedMessage =
      "current weather conditions for location New York having temperature 23 degrees and weather condition is heavy";
    expect(weather.display()).toContain("New York")
    expect(weather.display()).toContain("23")
    expect(weather.display()).toContain("heavy")
    global.score += 1;
  });
});

//### Testcases for Sunny Constructor function
describe("Sunny object", () => {
  test("should create a new Sunny object using the Constructor function with the correct location, temperature, and conditions properties", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    expect(sunnyWeather.location).toBe("Indiana");
    expect(sunnyWeather.temperature).toBe(42);
    expect(sunnyWeather.conditions).toBe("sunny");
    global.score += 1;
  });

  test("should display the correct message for Sunny object", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    const expectedMessage =
      "we are at location Indiana temperature here is 42 degrees weather condition is sunny";
    expect(sunnyWeather.display()).toContain("Indiana");
    expect(sunnyWeather.display()).toContain("42");
    global.score += 1;
  });
});

// ### Testcases for Rainy Constructor function
describe("Rainy object", () => {
  test("should create a new Rainy object using the Constructor function with the correct location, temperature, and conditions properties", () => {
    const rainyWeather = new Rainy("Kashmir", 12, "light");
    expect(rainyWeather.location).toBe("Kashmir");
    expect(rainyWeather.temperature).toBe(12);
    expect(rainyWeather.conditions).toBe("rainy");
    expect(rainyWeather.precipitation).toBe("light");
    global.score += 1;
  });

  test("should display with the correct message for Rainy object", () => {
    const rainyWeather = new Rainy("Kashmir", 12, "light");
    const expectedMessage =
      // "we are at location Kashmir temperature here is 12 degrees weather condition is rainy and precipitation is light";
      "we are at location Kashmir temperature here is 12 degrees weather condition is rainy and precipitation is light";
    expect(rainyWeather.display()).toContain("Kashmir");
    expect(rainyWeather.display()).toContain("12");
    expect(rainyWeather.display()).toContain("light");
    expect(rainyWeather.display()).toContain("rainy");
    global.score += 1;
  });
});

// Test cases for the setLocation and setTemperture for sunnyWeather
describe("Checks for the setLocation and setTemperature on Sunny Object", () => {
  test("testing setLocation", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    expect(sunnyWeather.location).toBe("Indiana");
    sunnyWeather.setLocation("Nagpur");
    expect(sunnyWeather.location).toBe("Nagpur");
    global.score += 1;
  });
  test("testing setTemperture", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    expect(sunnyWeather.temperature).toBe(42);
    sunnyWeather.setTemperature(36);
    expect(sunnyWeather.temperature).toBe(36);
    global.score += 1;
  });
});

// Test cases for the setLocation and setTemperture for rainyWeather
describe("Checks for the setLocation and setTemperature on Rainy Object", () => {
  test("testing setLocation", () => {
    const rainyWeather = new Rainy("Bangalore", 22);
    expect(rainyWeather.location).toBe("Bangalore");
    rainyWeather.setLocation("Odisha");
    expect(rainyWeather.location).toBe("Odisha");
    global.score += 1;
  });
  test("testing setTemperture", () => {
    const rainyWeather = new Rainy("Bangalore", 22);
    expect(rainyWeather.temperature).toBe(22);
    rainyWeather.setTemperature(36);
    expect(rainyWeather.temperature).toBe(36);
    global.score += 1;
  });
});

// Test cases for Athlete Constructor function
describe("Athlete Constructor function", () => {
  it("Create Athlete Constructor function and initializes with properties name, age, and sport", () => {
    let athlete = new Athlete("Rohit", 27, "football");
    expect(athlete.name).toBe("Rohit");
    expect(athlete.age).toBe(27);
    expect(athlete.sport).toBe("football");
    global.score += 1;
  });

  it("Athlete have methods to train, and compete and should display the correct message ", () => {
    let athlete = new Athlete("Rohit", 27, "football");

    const expectedMessage1 = "athlete Rohit is training for football";
    expect(athlete.train()).toContain("Rohit");
    expect(athlete.train()).toContain("training");
    expect(athlete.train()).toContain("football");
    const expectedMessage2 = "athlete Rohit is competing for football";
    expect(athlete.compete()).toContain("Rohit");
    expect(athlete.compete()).toContain("competing");
    expect(athlete.compete()).toContain("football");
    global.score += 1;
  });
});

//Testcase for Runner Constructor function
describe("Runner Constructor function", () => {
  it("Create Runner Constructor function and initializes with properties name, age, sport, and distance", () => {
    const runner = new Runner("Messi", 37, "tennis", 412);
    expect(runner.name).toBe("Messi");
    expect(runner.age).toBe(37);
    expect(runner.sport).toBe("tennis");
    expect(runner.distance).toBe(412);
    global.score += 1;
  });

  it("Runner have methods to train, and compete and should display the correct message", () => {
    const runner = new Runner("Messi", 37, "tennis", 412);

    const expectedMessage1 = "athlete Messi is training for distance of 412m";
    expect(runner.train()).toContain("Messi")
    expect(runner.train()).toContain("training")
    expect(runner.train()).toContain("412")
    const expectedMessage2 = "athlete Messi is competing for distance of 412m";
    expect(runner.compete()).toContain("Messi");
    expect(runner.compete()).toContain("competing");
    expect(runner.compete()).toContain("412");
    global.score += 1;
  });
});

// testcases for swimmer Constructor function
describe("Swimmer Constructor function ", () => {
  it("Create Swimmer Constructor function and initializes with properties name, age, sport, SwimmingStyle", () => {
    let swimmer = new Swimmer("Rohit", 27, "football", "backward Side");
    expect(swimmer.name).toBe("Rohit");
    expect(swimmer.age).toBe(27);
    expect(swimmer.sport).toBe("football");
    expect(swimmer.SwimmingStyle).toBe("backward Side");
    global.score += 1;
  });

  it("Swimmers have methods to train, and compete and should display the correct message", () => {
    let swimmer = new Swimmer("Rohit", 27, "football", "backward Side");

    const expectedMessage1 =
      "athlete Rohit is training for swimming with style of backward Side";
    expect(swimmer.train()).toContain("Rohit");
    expect(swimmer.train()).toContain("training");
    expect(swimmer.train()).toContain("swimming");
    expect(swimmer.train()).toContain("backward Side");
    const expectedMessage2 =
      "athlete Rohit is competing for swimming with style of backward Side";
    expect(swimmer.compete()).toContain("Rohit");
    expect(swimmer.compete()).toContain("competing");
    expect(swimmer.compete()).toContain("swimming");
    expect(swimmer.compete()).toContain("backward Side");
    global.score += 1;
  });
});

//Testcase for Person
describe("Person Object", () => {
  it("Create Person Constructor function and initializes with properties name, age, gender", () => {
    const person = new Person("Kiya", 2, "female");

    expect(person.name).toBe("Kiya");
    expect(person.age).toBe(2);
    expect(person.gender).toBe("female");
    global.score += 1;
  });

  it("Person have method displayInfo should display with the correct message", () => {
    const person = new Person("Kiya", 2, "female");

    const expectedMessage = "Name: Kiya, Age: 2, Gender: female";
    expect(person.displayInfo()).toContain("Kiya");
    expect(person.displayInfo()).toContain("2");
    expect(person.displayInfo()).toContain("female");
    global.score += 1;
  });
});

//Testcases for Student
describe("Student Object", () => {
  it("Create a Student Constructor function and initializes with properties name, age, gender, StudentID, Major", () => {
    const student = new Student("Shree", 20, "male", "972166", "ETC");
    expect(student.name).toBe("Shree");
    expect(student.age).toBe(20);
    expect(student.gender).toBe("male");
    expect(student.StudentID).toBe("972166");
    expect(student.Major).toBe("ETC");
    global.score += 1;
  });

  it("Student have method displayInfo, enroll and drop should display with the correct message", () => {
    const student = new Student("Shree", 20, "male", "972166", "Computer");

    const expectedMessage =
      "Name: Shree, Age: 20, Gender: male, Student ID: 972166, Major: Computer, Courses: ";
    expect(student.displayInfo()).toContain("Shree");
    expect(student.displayInfo()).toContain("20");
    expect(student.displayInfo()).toContain("male");
    expect(student.displayInfo()).toContain("972166");
    expect(student.displayInfo()).toContain("Computer");
    expect(student.displayInfo()).toContain(" ");

    student.enroll("SQL");
    student.enroll("NEXT.js");
    const expectedMessage2 =
      "Name: Shree, Age: 20, Gender: male, Student ID: 972166, Major: Computer, Courses: SQL,NEXT.js";
    expect(student.displayInfo()).toContain("Shree");
    expect(student.displayInfo()).toContain("20");
    expect(student.displayInfo()).toContain("male");
    expect(student.displayInfo()).toContain("972166");
    expect(student.displayInfo()).toContain("Computer");
    expect(student.displayInfo()).toContain("SQL,NEXT.js");

    student.drop("Java");
    expect(student.displayInfo()).toContain("Shree");
    expect(student.displayInfo()).toContain("20");
    expect(student.displayInfo()).toContain("male");
    expect(student.displayInfo()).toContain("972166");
    expect(student.displayInfo()).toContain("Computer");
    expect(student.displayInfo()).toContain("SQL,NEXT.js");
    student.drop("NEXT.js");
    student.enroll("MongoDB");

    const expectedMessage3 =
      "Name: Shree, Age: 20, Gender: male, Student ID: 972166, Major: Computer, Courses: SQL,MongoDB";
      expect(student.displayInfo()).toContain("Shree");
      expect(student.displayInfo()).toContain("20");
      expect(student.displayInfo()).toContain("male");
      expect(student.displayInfo()).toContain("972166");
      expect(student.displayInfo()).toContain("Computer");
      expect(student.displayInfo()).toContain("SQL,MongoDB");

    global.score += 3;
  });
});

//Testcases for Professor
describe("Professor Object", () => {
  it("Create Professor Constructor function and initializes with properties name, age, gender, professorID, department", () => {
    const professor = new Professor("Riya", 35, "female", "989554", "IT");
    expect(professor.name).toBe("Riya");
    expect(professor.age).toBe(35);
    expect(professor.gender).toBe("female");
    expect(professor.professorID).toBe("989554");
    expect(professor.department).toBe("IT");
    global.score += 1;
  });

  it("Professor has method displayInfo, teach and grade should display with correct message", () => {
    const professor = new Professor("Riya", 35, "female", "989554", "IT");

    const expectedMessage =
      "Name: Riya, Age: 35, Gender: female, Professor ID: 989554, Department: IT";
    expect(professor.displayInfo()).toContain("Riya");
    expect(professor.displayInfo()).toContain("35");
    expect(professor.displayInfo()).toContain("female");
    expect(professor.displayInfo()).toContain("989554");
    expect(professor.displayInfo()).toContain("IT");

    const expectedMessage2 = "Riya is teaching History";
    expect(professor.teach("History")).toContain("Riya");
    expect(professor.teach("History")).toContain("teaching");
    expect(professor.teach("History")).toContain("History");

    const expectedMessage3 =
      "Riya is grading Sonu’s performance in Hindi with the grade C";
    expect(professor.grade("sonu", "Hindi", "C")).toContain("Riya");
    expect(professor.grade("sonu", "Hindi", "C")).toContain("grading");
    expect(professor.grade("sonu", "Hindi", "C")).toContain("sonu");
    expect(professor.grade("sonu", "Hindi", "C")).toContain("Hindi");
    expect(professor.grade("sonu", "Hindi", "C")).toContain("grade C");

    global.score += 3;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
