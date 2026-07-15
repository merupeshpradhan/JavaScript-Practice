// 1) Functions Declarations
console.log("\nFunctions Declarations:- ");

function printData(data) {
  console.log("Data is ", data, "\n");
}

printData(34);

// 2) Function Expression
console.log("Functions Expression:- ");

let getData = function (data) {
  console.log("Data is ", data, "\n");
};

getData(30);

// 3) Arrow Function
console.log("Arrow Functions:- ");

let userName = (name) => {
  console.log("User Name is:- ", name, "\n");
};

userName("Rupesh Pradhan");

// 4) Anonymos function
console.log("Anonymos Function:- \n");

setTimeout(function () {
  console.log("The Anonymos functions required some time to run a function.\n");
}, 2000);

// 5) Immediatly Invoked Function Expression (IIFE)
console.log("Immediatly Invoked Function Expression:- ");

(function () {
  console.log("When page is on 1st run Immediatly Invoked Function Expression (IIFE). \n");
})();
