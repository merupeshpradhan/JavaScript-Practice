// const data = {
//   name: "Rupesh Pradhan",
//   Phone: 7327001410,
//   addresh: "Bhallubahal",
//   age: 25,
// };

// console.log(data);

// const student = { id: 1, name: "Rupesh", phone: "7327001410", mark: "90" };
const student = [
  { id: 1, name: "Rupesh" },
  { id: 2, name: "Manas" },
  { id: 3, name: "Adii" },
  { id: 4, name: "Amiya" },
];

// console.log(student[0].id);

for (let i = 0; i < student.length; i++) {
  // console.log(student[i].id);
  console.log(`${student[i].id} -> ${student[i].name}`);
}
