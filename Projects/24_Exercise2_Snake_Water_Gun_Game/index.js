/* Use javaScript to create a game of snake, water & Gun. The game should ask you to enter S, W and G. The computer should be value to randomly generate S, W and G and declare Win or Loss using alert Use confirm and prompt where required {Here use Math.random() for getting nambur numbers} */

let winner = document.getElementById("winner");
let button = document.getElementById("btn");
let choices = ["S", "W", "G"];
let randomSelect;

function playSnakeWaterGun() {
  let userChoice = prompt(
    "Enter S for Snake, W for Water and G for Gun",
  ).toUpperCase();
  console.log(userChoice);

  randomSelect = Math.floor(Math.random() * 3);
  console.log(choices[randomSelect]);

  if (choices[randomSelect] === "S" && userChoice === "s") {
    console.log("It's a Draw!");
    winner.textContent = "It's a Draw!";
    alert("It's a Draw!");
  }

  if (choices[randomSelect] === "S" && userChoice === "W") {
    winner.textContent = "Winner is Snake";
  }

  if (choices[randomSelect] === "S" && userChoice === "G") {
    winner.textContent = "Winner is Gun";
    alert("You Won! Gun kills Snake.");
  }

  if (choices[randomSelect] === "W" && userChoice === "W") {
    console.log("It's a Draw!");
    winner.textContent = "It's a Draw!";
    alert("It's a Draw!");
  }

  if (choices[randomSelect] === "W" && userChoice === "G") {
    winner.textContent = "Winner is Water";
    alert("You Lost! Water rusts/damps Gun.");
  }

  if (choices[randomSelect] === "W" && userChoice === "S") {
    winner.textContent = "Winner is Snake";
    alert("You won! snake drinks water");
  }

  if (choices[randomSelect] === "G" && userChoice === "G") {
    console.log("It's a Draw!");
    winner.textContent = "It's a Draw!";
    alert("It's a Draw!");
  }

  if (choices[randomSelect] === "G" && userChoice === "S") {
    winner.textContent = "Winner is Gun";
    alert("You Lost! Gun kills snake.");
  }

  if (choices[randomSelect] === "G" && userChoice === "W") {
    winner.textContent = "Winner is Water";
    alert("You Lost! Water rusts/damps Gun.");
  }
};

// Action Practice
button.addEventListener("click", playSnakeWaterGun); 