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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = (document.querySelector(".score").textContent = 20);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (score <= 1) {
    score = 0;
    document.querySelector(".score").textContent = `${score}`;
    return (document.querySelector(".message").textContent =
      "Game Over! Please try again 🙂‍↕️");
  }
  if (!guess) {
    document.querySelector(".message").textContent =
      "Please enter a valid number 😤";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Yayy! You found it !!!🏆 ";
  } else if (guess > secretNumber) {
    score--;
    document.querySelector(".message").textContent =
      "Too High! Try a smaller Number 🙂‍↕️";
    document.querySelector(".score").textContent = `${score}`;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent =
      "Too Low! Try a bigger Number 🙂‍↕️";
    score--;
    document.querySelector(".score").textContent = `${score}`;
  }
});
