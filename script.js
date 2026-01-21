"use strict";
/*
// console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent =
  "Congrats! Its the Correct Number 😃";

// console.log(document.querySelector(".message").textContent);

// console.log(document.querySelector(".number").textContent);
// console.log(document.querySelector(".score").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".number").textContent);
// console.log(document.querySelector(".score").textContent);

document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = `${message}`;
};
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (score <= 1) {
    score = 0;
    document.querySelector(".score").textContent = `${score}`;
    return displayMessage("Game Over! Please try again 💥");
  }

  if (!guess) {
    document.querySelector(".message").textContent =
      "Please enter a valid number 😤";
  } else if (guess === secretNumber) {
    displayMessage("Yayy! You found it !!!🏆 ");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    guess > secretNumber
      ? displayMessage("Too High! Try a smaller Number 🙂‍↕️")
      : displayMessage("Too Low! Try a bigger Number 🙂‍↕️");
    score--;
    document.querySelector(".score").textContent = `${score}`;
  }
});
