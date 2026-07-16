// Text Length Print
let textSize = "Sambalpur";
console.log(`\nText Length: ${textSize.length}`);

// Capital text print
let capitalName = "Rupesh Pradhan";
console.log(`\nCapital Text : ${capitalName.toUpperCase()}`);

// Lowere text print
let smallName = "Rupesh Pradhan";
console.log(`\nSmall Text: ${smallName.toLowerCase()}`);

// Print text occurindg to number
let village = "Bhalubahal";
console.log(
  `\nFrome village name print this type slice(start):  ${village.slice(4)}`,
);
console.log(
  `\nFrome village name print this type slice(start, end):  ${village.slice(2, 4)}`,
);

// Changing name using .replace()
let userName = "Jagdish";
console.log(`\n${userName} this name is now change`);
let newName = userName.replace("Jagdish", "Jayasan");
console.log(`The The Replace name is ${newName}`);

// Connect name .connect()
let name1 = "Rupesh";
let name2 = "Adii";
let name3 = "Amiya";
let name4 = "Manas";

let connectName = name1.concat(name2, name3, name4, "yes");
console.log(`\nNow connect name are ${connectName}`);

// Geting Charcter from one text
let name = "Rupesh";
console.log(`\nName first word of Rupesh name: ${name[0]} \n`);
