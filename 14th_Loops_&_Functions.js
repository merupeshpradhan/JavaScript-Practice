// Loop

// for Loop
let valus = [100, 2000, 32323, 41232, 532432, 623432];

console.log("\nFoor Loop");
for (let key = 0; key < valus.length; key++) {
  console.log("Value ", key + 1, "", "=", valus[key]);
}

// Arry
let arrayValus = [174884, 23432, 3324234, 4143, 51431, 667];

// Print Only Array key
console.log("\nGetting Array Keys");
for (let key in arrayValus) {
  console.log(key);
}

// Print Only Array value
console.log("\nGetting Array Values");

for (let valu of arrayValus) {
  console.log(`${valu}`);
}

// Object
let object = {
  name: "Manas",
  number: 7327001410,
};

let objectValues = {
  first: {
    name: "Rupesh Pradhan",
    number: "7327001410",
  },
  second: {
    name: "Adii",
    number: "7327001410",
  },
};

// Print Full Object
console.log("\nGeting Object key and valu");

console.log(objectValues, "\n");

// Get Object Key
console.log("Print Object key");
for (let key in object) {
  console.log(`${key}`);
}

// Get Object value
console.log("\nPrint Object value");
for (let valu in object) {
  console.log(object.name);
}

// Get Object Value another way
console.log("\nGeting Object data another way");
for (let valu in objectValues) {
  console.log(`${objectValues[valu].number}`);
}

// Get Both Name and Phone Number from the Object
for (let value of Object.values(objectValues)) {
  console.log(`Name: ${value.name}, Age: ${value.number}\n`);
}

// While Loop
console.log("While Loop Using");

// let number = 10;
// while (number >= 0) {
//   console.log(number);
//   number--;
// }

let wNumber = 7;
while (wNumber < 10) {
  console.log(wNumber);
  wNumber++;
}

// Do While Loop
console.log("\nDo While Loop Using");
let dwNumber = 7;
do {
  console.log(dwNumber);
  dwNumber++;
} while (dwNumber < 10);
