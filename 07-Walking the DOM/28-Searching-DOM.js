/* 
-> The Searching DOM will 6 type
    - i) getElementById()
    - ii) quarySelectorAll()
    - iii) quarySelector()
    - iv) getElementsByTagName()
    - v) getElementsByClassName()
    - vi) getElementsByName()
 */

/* i) getElementById() */
// let paragraph = document.getElementById("world");

// paragraph.style.color = "red";
// paragraph.style.padding = "20px";

/* ii) quarySelectorAll() */
// let paragraph = document.querySelectorAll(".text");

// paragraph[0].style.color = "green";
// paragraph[0].style.fontSize = "30px";
// paragraph[1].style.color = "orange";
// paragraph[1].style.fontSize = "20px";

// paragraph.forEach((p) => {
//   p.style.color = "green";
//   p.style.fontSize = "30px";
// });

/* iii) quarySelector() */
// let paragraph = document.querySelector(".text");
// paragraph.style.color = "green";

/* iv) getElementsByTagName() */
// let paragraph = document.getElementsByTagName("p");
// paragraph[0].style.color = "green";

/* v) getElementsByClassName() */
// let className = document.getElementsByClassName("text");
// className[0].style.color = "green";

// for (let p of className) {
//     p.style.color = "green";
// }

/* vi) getElementsByName() */
// let inputName = document.getElementsByName("gender");
// console.log(inputName[0]);
// console.log(inputName[1]);
// inputName[0].style.padding="90px"

/* Style the form */
let form = document.getElementsByTagName("form");
let button = document.getElementsByTagName("button");
let detials = document.getElementsByClassName("detials");
let genders = document.querySelector(".genders");

form[0].style.display = "flex";
form[0].style.flexDirection = "column";
form[0].style.gap = "5px";
form[0].style.alignItems = "center";

button[0].style.width="10vw"
button[0].style.padding="5px"
button[0].style.borderRadius="5px"
button[0].style.border="1px solid black"

detials[0].style.width = "20%";
detials[0].style.height = "100px";
detials[0].style.display = "flex";
detials[0].style.justifyContent = "space-between";
detials[0].style.border = "1px solid black";
detials[0].style.padding = "10px";
detials[0].style.flexDirection = "column";
detials[0].style.alignItems = "center";
// detials[0].style.display = "flex";
// detials[0].style.gap = "20px";

genders.style.display = "flex";
genders.style.gap = "5px";
genders.style.marginTop = "5px";
