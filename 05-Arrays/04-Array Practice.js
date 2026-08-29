// Q1) Create an array of number and take input from the user to add number to this array.
// let numbers = [1, 5, 6, 3];
// console.log("User without adding, Arry numbers are:", numbers);
// let userInput = Number(prompt("Please Enter a number"));
// numbers.push(userInput);
// console.log("After user adding number:", numbers);

// Q2) Keep adding numbers to the array in (1) until 0 is add to the array.
// let numbers = [20, 45, 6, 83, 55, 2, 88];
// let input;
// do {
//   input = Number(prompt("Provide a number to add in array"));
//   numbers.push(input);
//   console.log(numbers);
// } while (input !== 0);

// 3) filter for numbers devisible by 10 from a given array
// function devisible(number) {
//   if (number % 10 === 0) {
//     return number;
//   }
// }
// let value = numbers.filter(devisible);

// console.log(value);

// 4) Create an array of square of given array numbers
// console.log("\nOrginal Array:", numbers);
// let finaleValue = numbers.map((n) => {
//   return n * n;
// });
// console.log("Square of array is:", finaleValue);

// 5) Use Reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calcualated)
let numbers = [1,2,3,4]
console.log("\nOrginal array:",numbers);
let calculateNumber = numbers.reduce((n1, n2) => {
  return n1 * n2;
});
console.log("After use reduce():",calculateNumber);
