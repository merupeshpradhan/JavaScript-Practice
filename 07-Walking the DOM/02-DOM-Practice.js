const body = document.body;

/* 1) Create a navbar and change the color of its first element to red */
// const nav = document.createElement("nav");
// const div = document.createElement("div");

// nav.textContent = "Navbar";
// nav.style.borderBottom = "1px solid black";
// nav.style.padding = "15px";

// const navLinks = ["Home", "Jobs", "Applyed Jobs", "Profile"];

// navLinks.map((link, i) => {
//   const p = document.createElement("p");
//   p.textContent = link;

//   if (i === 0) {
//     p.style.color = "red";
//   }

//   nav.style.display = "flex";
//   nav.style.justifyContent = "space-between";

//   nav.append(p);
// });

// body.append(nav);

/* 2) Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not */
// function checkTable() {
//   const tbody = document.querySelector("table tbody");

//   if (tbody) {
//     document.getElementById("result").textContent =
//       "Yes, tbody exists in the DOM.";
//     alert("Yes, tbody exists in the DOM.");
//   } else {
//     document.getElementById("result").textContent = "No tbody found.";
//     alert("No tbody found.");
//   }
// }

/* 3)Create a element with 3 children. Now change the color of first and last element to green */
// const firstElement = (document.getElementsByTagName(
//   "div",
// )[0].firstElementChild.style.color = "green");
// const secondElement = (document.getElementsByTagName(
//   "div",
// )[0].lastElementChild.style.color = "green");

// const elements = document.querySelectorAll("div p");
// elements[0].style.color = "green";
// // elements[2].style.color = "red";
// elements[elements.length - 1].style.color = "green";

/* 4) write a jaaScript code to change background of all <li> tags to cyan */
// const lists = document.getElementsByTagName("li");
// Array.from(document.getElementsByTagName("li")).forEach((list) => {
//   list.style.background = "red";
// });
