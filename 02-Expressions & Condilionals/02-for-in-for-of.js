// // Using ( for-in ) Array
// const datas = ["Rupesh", "Manas", "Amiya", "Adii"];

// for (const data in datas) {
//     console.log(data);
// }

// Using ( for-in ) Object
const datas = { name: "Rupesh", name1: "Manas", name2: "Amiya", name3: "Adii" };
for (const key in datas) {
  console.log(datas[key]);
}

// Using ( foor---of )
const friends = [
  {
    name: "Manas",
  },
  { name: "Amiya" },
  { name: "Adii" },
];

for (const [index, friend] of friends.entries()) {
  //   console.log(friend.name);
  for (const key in friend) {
    console.log(`${index + 1}) ${key} -> ${friend[key]}`);
  }
}
