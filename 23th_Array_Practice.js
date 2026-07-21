// Q1) Create an array of number and take input from the user to add number to this array.
let numbers = [20, 4.5, 6, 83];
console.log("User without adding, Arry numbers are:", numbers);
// let userInput = Number(prompt("Please Enter a number"));
// numbers.push(userInput);
console.log("After user adding number:", numbers);

// Q2) Keep adding numbers to the array in (1) until 0 is add to the array.

// 3) filter for numbers devisible by 10 from a given array
function devisible(number) {
  if (number % 10 === 0) {
    return number;
  }
}
let value = numbers.filter(devisible);

console.log(value);
