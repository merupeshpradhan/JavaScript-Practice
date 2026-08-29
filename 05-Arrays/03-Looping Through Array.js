console.log("\nLooping Through Array\n");

let numbers = [78, 343, 2, 55, 3, 555, 65];
let laters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
console.log("Array:", numbers, "\n");

// 1) ForEach
console.log("1) Using ForEach Loop:");
numbers.forEach((value, index, array) => {
  console.log(`Index: ${index}, Value: ${value}, Only Array View: ${array}`);
});

// 2) map()
console.log("\n2) Using map():");
numbers.map((value, index, array) => {
  console.log(`Index: ${index}, Value: ${value}, Only Array View: ${array}`);
});

// 3) filter()
console.log("\n3) Using filter():");

function bigNumbers(number) {
  return number > 55;
}
let filterNumbers = numbers.filter(bigNumbers);

console.log("The Big number in array:", filterNumbers, "\n");

// 3) reduce method
let sumRequiredNumbers = [6, 3, 6, 7, 2];
console.log("\n3) Using reduce():");
console.log("With out some the array value is:", sumRequiredNumbers);

let addingArray = (a, b) => {
  return a + b;
};
let totalSum = sumRequiredNumbers.reduce(addingArray);

console.log(
  "After some all the number from Array the value is:",
  totalSum,
  "\n",
);

// 4) Array.from()
let name = "Rupesh";
console.log("\n3) Using Array.from():");
console.log("With out Using Array.from() the string is:", name);
let useArrayFrom = Array.from(name);
console.log("After use Array.from():", useArrayFrom);

// 5) for...of loop
console.log("\n3) Using for...of loop:\n");
for (let value of numbers) {
  console.log(value);
}

// 6) for...in loop
console.log("\n3) Using for...in loop:");
for (let key in numbers) {
  console.log(key);
}