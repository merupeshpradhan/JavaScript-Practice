// setTimeout(function rupesh() {
//   console.log("Hello Bhalubahal");
// }, 1000);

// setTimeout(function rupesh() {
//   console.log("Hello Pradhan Home");
// }, 2000);

// setTimeout(function rupesh() {
//   console.log("Hello Prabhasini");
// }, 3000);

// setTimeout(function rupesh() {
//   console.log("Hello Bhubaneswar");
// }, 4000);

// setTimeout(function rupesh() {
//   console.log("Hello Tapas");
// }, 5000);

// setTimeout(function rupesh() {
//   console.log("Hello Rupesh");
// }, 6000);

// console.log("Rupesh");

// setTimeout(() => console.log("Rupesh2"), 0);

// async function rupesh() {
//   console.log("Rupesh3");
//   console.log("Rupesh4");
// }

// rupesh();

// console.log("Rupesh5");

var number = [10, 20, 30];

for (var i = 1; i < number.length; i++) {
  console.log(number[i - 1]);
  console.log(number[i + 1]);
  setTimeout(() => console.log(number[i]));
}