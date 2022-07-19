console.clear();
// The Fortune Teller
const tellFortune = (numChildren, soulMate, dreamLoc, jobTitle) =>
  `You will be a ${jobTitle} in ${dreamLoc}, and married to ${soulMate} with ${numChildren} kids.`;

console.log(tellFortune("no", "no one", "Antartica", "Developer"));
console.log(tellFortune(2, "Joana", "London", "Developer"));
console.log(tellFortune(3, "Olivia", "South Africa", "Developer"));

// The Puppy Age Calculator
const calculateDogAge = (puppyAge, conversionRate) =>
  `Your doggie is ${puppyAge * conversionRate} years old in dog years!`;

console.log(calculateDogAge(3, 7));
console.log(calculateDogAge(5, 7));
console.log(calculateDogAge(10, 7));

// The Lifetime Supply Calculator
let calculateSupply = (age, amountPerDay) =>
  `You will need ${Math.round(
    (100 - age) * 365 * amountPerDay
  )} to last you until the ripe old age of 100`;

console.log(calculateSupply(20, 2.2));

// The Geometrizer
const calcCircumference = (radius) =>
  `The circumference is ${Math.PI * 2 * radius}`;

const calcArea = (radius) => `The area is ${Math.PI * radius ** 2}`;

console.log(calcCircumference(10));
console.log(calcArea(10));

// The Temperature Converter
const celsiusToFahrenheit = function (celsius) {
  let celsiusTemp = celsius;
  return `${celsiusTemp}°C is ${(celsiusTemp / 5) * 9 + 32}°F`;
};

const fahrenheitToCelsius = function (fahrenheit) {
  let fahrenheitTemp = fahrenheit;
  return `${fahrenheitTemp}°F is ${((fahrenheitTemp - 32) * 5) / 9}°C`;
};

console.log(celsiusToFahrenheit(30));
console.log(fahrenheitToCelsius(100));
