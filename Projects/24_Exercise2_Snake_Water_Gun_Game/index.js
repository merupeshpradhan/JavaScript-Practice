/* Use javaScript to create a game of snake, water & Gun. The game should ask you to enter S, W and G. The computer should be value to randomly generate S, W and G and declare Win or Loss using alert Use confirm and prompt where required {Here use Math.random() for getting nambur numbers} */

let winner = document.getElementById("winner");

let btn = document.getElementById("btn");

let choices = ["S", "W", "G"];

let randomSelect;

btn.onclick = function () {
  let userChoice = prompt("Enter S for Snake, W for Water and G for Gun");
  userChoice.toUpperCase();
  
  randomSelect = Math.floor(Math.random() * 3 + 1);
  console.log(choices[randomSelect]);

  if (choices[randomSelect] === "S" && userChoice === "s") {
    console.log("It's a Draw!");
    winner.textContent = "It's a Draw!";
  }

  if (choices[randomSelect] === "S" && userChoice === "W") {
    winner.textContent = "Winner is Snake";
  }

  if (choices[randomSelect] === "S" && userChoice === "G") {
    winner.textContent = "Winner is Gun";
  }

  if (choices[randomSelect] === "W" && userChoice === "W") {
    console.log("It's a Draw!");

    winner.textContent = "It's a Draw!";
  }

  if (choices[randomSelect] === "W" && userChoice === "G") {
    winner.textContent = "Winner is Water";
  }

  if (choices[randomSelect] === "W" && userChoice === "S") {
    winner.textContent = "Winner is Snake";
  }

  if (choices[randomSelect] === "G" && userChoice === "G") {
    console.log("It's a Draw!");
    winner.textContent = "It's a Draw!";
  }

  if (choices[randomSelect] === "G" && userChoice === "S") {
    winner.textContent = "Winner is Gun";
  }

  if (choices[randomSelect] === "G" && userChoice === "W") {
    winner.textContent = "Winner is Water";
  }
};
