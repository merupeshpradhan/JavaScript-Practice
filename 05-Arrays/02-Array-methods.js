/*          Array Method          */
// Many array method this is the basucaly use method

let friends = ["Rupesh", "Manas", "Amiya", "Adii", "Rashmi"];
// 1) toStriing()
console.log("---------- toString() ----------");
let convertData = friends.toString();
console.log("\n", convertData, "\n");

// 2) join()
console.log("---------- join() ----------");
console.log(friends.join(" - "), "\n");

// 3) pop()
console.log("---------- pop() ----------");
console.log("Orginal array is:", friends);
console.log("Now remove element from array is:", friends.pop(), "\n");

// 4) push()
console.log("---------- push() ----------");
console.log("Orginal array is:", friends);
console.log("Now use push() using adding one value:", friends.push("jagdish"));
console.log("Now friend array is:", friends, "\n");

// 5) shift()
console.log("---------- shift() ----------");
let info = ["Bhalubahal", "Rupesh", 7327001410];
console.log("Normal view array:", info);
console.log("Now remove first element of arry:", info.shift());
console.log("After remove showing array:", info, "\n");

// 6) unShift()
console.log("---------- unShift() ----------");
console.log("Inside friend array data is:", friends);
console.log("friends length is:", friends.length);
console.log(
  "Add new element in array using unsift() and that length is:",
  friends.unshift("Bhupen"),
);
console.log("This is the full array:", friends, "\n");

// 7) delete()
console.log("---------- delete() ----------");
console.log("Now Delete outpout this give:", delete info[0]);
console.log("In array print showing this:", info, "\n");

// 8) concat()
console.log("---------- concat() ----------");
console.log("Without use concat():", info);
let cityName = "Kuchinda";
let result = info.concat(cityName);
console.log("After use concat():", result, "\n");

// 9) sort()
console.log("---------- sort() ----------");
let shortData = [1, 3224, 5, 6, "Rupesh", "manas", 2.34, true, undefined];
console.log("Without use sort():", info);
console.log("After use short():", shortData.sort());
let shortData2 = [7, 6, 3, 2, 6, 5, 3, 250, 70, 4, 6];
console.log("Without use sort():", shortData2);
console.log("After use sort():", shortData2.sort(), "\n");

// 10) splice()
console.log("---------- splice() ----------");
let item = [54, 3, 8, 76, 444, 78, 89, 65, 8, 7];
console.log("Without use splice():", item);
let addItem = item.splice(0, 4, 544, 7, 54, 72, 73);
console.log("After use splice():", item, "\n");

// 1) slice()
console.log("---------- slice() ----------");
let item2 = [54, 3, 8, 65, 8, 7];
console.log("Without use slice():", item2);
console.log("After use slice():", item2.slice(2, 4), "\n");

// 9) reverse()
console.log("---------- reverse() ----------");
let nameReverse = ["Rupesh", "Manas", "Adii", "Amiya"];
console.log(nameReverse.reverse());
