const { Weather, Sunny, Rainy } = require("../index");

global.score = 1;

describe("Weather object", () => {
  test("should create a new Weather with correct location ,temperature and conditions", () => {
    const weather = new Weather("NewYork", 23, "heavy");
    expect(weather.location).toBe("NewYork");
    expect(weather.temperature).toBe(23);
    expect(weather.conditions).toBe("heavy");
    global.score += 1;
  });

  test("should display with correct message", () => {
    const weather = new Weather("NewYork", 23, "heavy");
    const expectedMessage =
     "current weather conditions for location NewYork having temperature 23 degrees and weather condition is heavy";
    expect(weather.display()).toBe(expectedMessage);
    global.score += 1;
  });
});

// Test cases for the Sunny object
describe("Sunny object", () => {
  test("should create a new Sunny object  with correct location, temperature, and conditions properties", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    expect(sunnyWeather.location).toBe("Indiana");
    expect(sunnyWeather.temperature).toBe(42);
    expect(sunnyWeather.conditions).toBe("sunny");
    global.score += 1;
  });

  test("should display with correct message", () => {
    const sunnyWeather = new Sunny("Indiana", 42);
    const expectedMessage =
      "we are at location Indiana temperature here is 42 degrees weather condition is sunny";
    expect(sunnyWeather.display()).toBe(expectedMessage);
    global.score += 1;
  });
});

// Test cases for the Rainy object
describe("Rainy object", () => {
  test("should create a new Rainy object  with correct location, temperature, and conditions properties", () => {
    const rainyWeather = new Rainy("Kashmir", 12, "light");
    expect(rainyWeather.location).toBe("Kashmir");
    expect(rainyWeather.temperature).toBe(12);
    expect(rainyWeather.conditions).toBe("rainy");
    expect(rainyWeather.precipitation).toBe("light");
    global.score += 1;
  });

  test("should display with correct message", () => {
    const rainyWeather = new Rainy("Kashmir", 12, "light");
    const expectedMessage =
      // "we are at location Kashmir temperature here is 12 degrees weather condition is rainy and precipitation is light";
      "we are at location Kashmir temperature here is 12 degrees weather condition is rainy and precipitation is light";
    expect(rainyWeather.display()).toBe(expectedMessage);
    global.score += 1;
  });
});

// Test cases for the setLocation and setTemperture
describe("Checks for the setLocation and setTemperture on Sunny Object", () => {
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

// Test cases for the setLocation and setTemperture
describe("Checks for the setLocation and setTemperture on Rainy Object", () => {
  test("testing setLocation", () => {
    const rainyWeather = new Rainy("Banglore", 22);
    expect(rainyWeather.location).toBe("Banglore");
    rainyWeather.setLocation("Odisha");
    expect(rainyWeather.location).toBe("Odisha");
    global.score += 1;
  });
  test("testing setTemperture", () => {
    const rainyWeather = new Rainy("Banglore", 22);
    expect(rainyWeather.temperature).toBe(22);
    rainyWeather.setTemperature(36);
    expect(rainyWeather.temperature).toBe(36);
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
