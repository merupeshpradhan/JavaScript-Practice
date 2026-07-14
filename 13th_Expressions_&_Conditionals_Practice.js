// 1) Use code Operator to find whether the age of a person lies betwen 10 and 20?
function matchingUserFound(age) {
  if (age >= 10 && age <= 20) {
    console.log("\nAge is lies between 10 and 20\n");
  } else {
    console.log("\nAge did not lies between 10 and 20\n");
  }
}

matchingUserFound(25);

// 2) Demonstate the use of switch case statements in JavaScript
let name = "Manas";

switch (name) {
  case "Manas":
    console.log("Hydrabad Job Worker.\n");
    break;
  case "Amiya":
    console.log("BBSR Job Worker.\n");
    break;
  case "Adii":
    console.log("BBSR Job Woker.\n");
    break;
  case "Rupesh":
    console.log("Now Did Not Work Any things, Now Prepare For Job.\n");
    break;
}

// 3) Write a javaScript program to find wheter a number is Divisible by 2 and 3.
let number1 = 18;

if (number1 % 2 == 0 && number1 % 3 === 0) {
  console.log(`${number1} is Divisible by 2 and 3\n`);
} else {
  console.log(`${number1} is not Divisible by 2 and 3\n`);
}

// 4) Write a javaScript Program to find whether number is Divisible by 2 or 3.
let number2 = 17;

if (number2 % 2 === 0 || number2 % 3 === 0) {
  console.log(`${number2} is Divisible by 2 and 3\n`);
} else {
  console.log(`${number2} is not Divisible by 2 and 3\n`);
}

// 5) Print "You can Drive" or "You cannot Drive" Based on age being greater than 18 using terary operator.
// let age = 18;

// let result = age >= 18 ? "You can Drive" : "You cannot Drive";

// console.log(result);

let result = (age) => (age >= 18 ? "You can Drive" : "You cannot Drive");
console.log(`${result(17)}\n`);
