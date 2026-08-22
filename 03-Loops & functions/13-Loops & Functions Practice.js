const obj = {
  Rupesh: 93,
  manas: 95,
  Adii: 96,
  Amiya: 99,
};
// 1) Write a program to print the marks of a student in an object using for loop?
console.log("\nUsing for loop:-");

for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(`${Object.keys(obj)[i]} mark is ${obj[Object.keys(obj)[i]]}`);
}

// 2) Write a progrma Q1 using for in loop
console.log("\nUsing for in loop:");

for (let key in obj) {
  console.log(`${key} Mark is ${obj[key]}`);
}

// 3) Write a program to print "try again" until the user enters the correct number.
console.log("\nUsing Function:");

function checkingNumber(number) {
  if (number === 40) {
    console.log(number, " Is Correct Number.\n");
  } else {
    console.log("try again\n");
  }
}

checkingNumber(42);

// 4) Write a function to find mean of 5 numbers
function findMean(num1, num2, num3, num4, num5) {
  return (num1 * num2 * num3 * num4 * num5) / 5;
}

console.log(`Mean is : ${findMean(7, 5, 3, 8, 9)}\n`);

let values1 = findMean(7, 5, 3, 8, 9);
console.log(values1);
let values2 = findMean(3, 5, 6, 743, 2343);
console.log(values2);
