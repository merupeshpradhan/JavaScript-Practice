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
  `\nFrome village name print this type slice(start frrom key(4)):  ${village.slice(4)}`,
);
console.log(
  `Frome village name print this type slice(start key(2), end key(4)):  ${village.slice(2, 4)}`,
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

console.log(`\n${name1} friend are ${name2}, ${name3} and ${name4}`);

// Remove the space using .trim()
let school = "           Panchayat High School        ";
console.log("\n",school);
console.log(school.trim());

// Geting Charcter from one text
let name = "Rupesh";
console.log(`\nName first word of Rupesh name: ${name[0]} \n`);
