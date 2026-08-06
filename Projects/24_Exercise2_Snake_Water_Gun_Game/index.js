/* Use javaScript to create a game of snake, water & Gun. The game should ask you to enter S, W and G. The computer should be value to randomly generate S, W and G and declare Win or Loss using alert Use confirm and prompt where required {Here use Math.random() for getting nambur numbers} */

let winner = document.getElementById("winner");

let btn = document.getElementById("btn");

let choices = ["S", "W", "G"];

let randomSelect;

btn.onclick = function () {
  let userChoice = prompt("Enter S for Snake, W for Water and G for Gun");
  randomSelect = Math.floor(Math.random() * 3 + 1);
  console.log(choices[randomSelect]);

  while (true) {
    if (choices[randomSelect] === "S" && userChoice === "s") {
      winnner.textContent = "It's a Draw!";
      break;
    }

    if (choices[randomSelect] === "S" && userChoice === "W") {
      winner.textContent = "Snake";
      break;
    }

    if (choices[randomSelect] === "S" && userChoice === "G") {
      winner.textContent = "Gun";
      break;
    }

    if ((choices[randomSelect] === "W") && userChoice === "W") {
      winnner.textContent = "It's a Draw!";
      break;
    }

    if (choices[randomSelect] === "W" && userChoice === "G") {
      winner.textContent = "Water";
      break;
    }

    if (choices[randomSelect] === "W" && userChoice === "S") {
      winner.textContent = "Snake";
      break;
    }

    if (choices[randomSelect] === "G" && userChoice === "G") {
      winnner.textContent = "It's a Draw!";
      break;
    }

    if (choices[randomSelect] === "G" && userChoice === "S") {
      winner.textContent = "Gun";
      break;
    }

    if (choices[randomSelect] === "G" && userChoice === "W") {
      winner.textContent = "Water";
      break;
    }
  }
};
