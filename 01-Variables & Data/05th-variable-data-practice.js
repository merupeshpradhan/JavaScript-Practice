// 1) Create a value type String and try to add a number to it.
let name = "Rupesh";
let number = 123;

let res = name + number;
console.log(res);

// 2) Use typeOf chractor to find the data type of the string in last question.
console.log(typeof res);

// 3) Create a const Object in javaScript can you change it to hold a number later.
// const name = "Rupesh";
// name = "pradhan";
// console.log(name);
// the name can not change aagain in const 


// 4) Try to add a new key to the const object in problem 3. were you are to do it?
// No i did not do that becuse when use const one time thare taking data other side can not change that.


// 5) Write a js program to create a word-meaning dictionary of 5 words.
const dict = {
  appreciate:
    "to enjoy something or to understand the value of somebody/something",
  enemies: "persons, nations, etc., that are hostile to one another.",
  ataraxia:
    "a state of freedom from emotional disturbance and anxiety, especially as an ongoing condition of soul-fulfilling attainment; unconditional tranquility.",
};

console.log(dict.ataraxia);
console.log(dict["enemies"]);