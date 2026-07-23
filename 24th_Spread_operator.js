let obj = {
  name: "Rupesh Pradhan",
  age: 25,
  village: "Bhalubahal",
};
console.log("\nWithout use Spread operator the value is:", obj);
let useSpread = { ...obj };
console.log("After use Spread operator(...) the valu is:", useSpread);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let combineArr = [...arr1, ...arr2];
console.log("\nThe two array are a)", arr1, ", b)", arr2);
console.log("Now after combine both are :", combineArr);
