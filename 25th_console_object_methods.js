let age = 28;
// console.asserts(condition, message);
/*1) assert()*/ console.assert(age <= 25, "Age most be less then 25 required.");

/*2) clear()*/ // console.clear();

/*3 log())*/ console.log(age);

/*4) table()*/
// let users = ["Rupesh", "Manas", "Amiya", "Adii"];
let users = {
  name: "Rupesh",
  age: 25,
  village: "Bhalubahal",
};
console.table(users);

/*5) warn()*/ console.warn("Please provide correct date of birth.");

/*5) error()*/ console.error("You provide age is wrong.");

/*5) info()*/ console.info(users)