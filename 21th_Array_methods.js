/*          Array Method          */
// Many array method this is the basucaly use method

let friends = ["Rupesh", "Manas", "Amiya", "Adii", "Rashmi"];
// 1) toStriing()
let convertData = friends.toString();
console.log("\n", convertData, "\n");

// 2) join()
console.log(friends.join(" - "), "\n");

// 3) pop()
console.log("Orginal array is:", friends);
console.log("Now remove element from array is:", friends.pop(), "\n");

// 4 push()
console.log("Orginal array is:", friends);
console.log("Now use push() using adding one value:", friends.push("jagdish"));
console.log("Now friend array is:", friends, "\n");

// 5) shift()
let info = ["Bhalubahal", "Rupesh", 7327001410];
console.log("Normal view array:", info);
console.log("Now remove first element of arry:", info.shift());
console.log("After remove showing array:", info, "\n");

// 6) unShift()
console.log("Inside friend array data is:", friends);
console.log("friends length is:", friends.length);
console.log(
  "Add new element in array using unsift() and that length is:",
  friends.unshift("Bhupen"),
);
console.log("This is the full array:", friends, "\n");

// 7) delete()
console.log("Now Delete outpout this give:", delete info[0]);
console.log("In array print showing this:", info);
