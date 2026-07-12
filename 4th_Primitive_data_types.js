// string
let name = "Rupesh";

console.log(`- ${name} is ${typeof name} type`);

// number
let phone = 7327001410;
console.log(`- ${phone} is ${typeof phone} type`);

// Boolean
let male = true;
console.log(`- ${male} is ${typeof male} type`);

// Null
let value;
console.log(`- ${value} is ${typeof value} type`);

// Undefiend
let arryName = null;
console.log(`- ${arryName} is ${typeof arryName} type`);

// BigInt
let number = BigInt("123456789012345678901234567890");
console.log(`- ${number} is ${typeof number} type`);

// Symbol
let type = Symbol("id");
console.log(`- ${type.toString()} is ${typeof type} type`);

console.log(`- Symbol(${type.description}) is ${typeof type} type`);
