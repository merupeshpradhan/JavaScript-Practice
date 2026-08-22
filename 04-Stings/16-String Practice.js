// 1) what will the following print in javascript?
//              console.log("Rupesh\"".length);
console.log('Rupesh\"'.length, "\n");

// 2) Explore the inculde, Start with and End with in function of a string.
let user = "Amiya Home is Puri";
console.log(user.includes("Puri"));
console.log(user.startsWith("Amiya"));
console.log(user.endsWith("Manas"));

// 3) Write a program to convert a given string to lowerCase
let lowerCaseName = "Rupesh Pradhan";
console.log(
  `\n${lowerCaseName} name convert to lowerCase this type -> ${lowerCaseName.toLowerCase()} \n`,
);

// 4) Extract the amount of this String
//         "Please give Rs 1000"
let str = "Please give Rs 1000";
// let amount = str.slice(15);
// let amount = str.slice("Please give Rs ".length);
let amount = Number.parseInt(str.slice(15));
console.log("The amount is", amount);
console.log(typeof amount);

// 5) Try to change 4th Character of a given String Where you are to do it?
let changeName = "Ardabahal";
changeName[4];
