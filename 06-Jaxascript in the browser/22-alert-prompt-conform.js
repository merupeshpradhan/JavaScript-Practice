alert("Welcome to alert(), prompt() & conform() Practice.");
// let names = prompt("Your fraiend names are...");
let names = prompt("Your fraiend names are...", "Amiya, Adii, Manas, etc");

let desplyNames = confirm("Are you want to display all names");

if (desplyNames) {
  document.write(names);
} else {
  document.write("For display the name please slect the Yes");
}
