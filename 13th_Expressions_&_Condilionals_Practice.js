// 1) Use code Operator to find whether the age of a person lies betwen 10 and 20?
function matchingUserFound(age) {
  if (age >= 10 && age <= 20) {
    console.log("\nAge is lies between 10 and 20\n");
  } else {
    console.log("\nAge did not lies between 10 and 20\n");
  }
}

matchingUserFound(25);

// 2) Demonstate the use of switch case statements in JavaScript
let name = "Manas";

switch (name) {
  case "Manas":
    console.log("Hydrabad Job Worker.\n");
    break;
  case "Amiya":
    console.log("BBSR Job Worker.\n");
    break;
  case "Adii":
    console.log("BBSR Job Woker.\n");
    break;
  case "Rupesh":
    console.log("Now Did Not Work Any things, Now Prepare For Job.\n");
    break;
}
