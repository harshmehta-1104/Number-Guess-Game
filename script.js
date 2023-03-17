"use strict";

document.querySelector(".number").textContent = "🤔";

let secretnumber = Math.trunc(20 * Math.random()) + 1;
console.log(secretnumber);
// Math.random will always give number between 0...1 but we want it to be between 1...20 so we multiply it with 20 and then we use Math.traunc function bcz we only want the integer part, we dont want decimals.

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //Saving the value entered by user in variable guess.
  console.log(guess);

  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🤯NO NUMBER";
  }

  //When player wins
  else if (guess == secretnumber) {
    document.querySelector(".message").textContent = "🎉CORRECT NUMBER!";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretnumber;

    document.querySelector("body").style.backgroundImage =
      "linear-gradient(green,rgb(48, 225, 16))";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      {
        document.querySelector(".message").textContent =
          guess > secretnumber ? "📈Too high!" : "📉Too low!";
        score = score - 1;
        document.querySelector(".score").textContent = score;
      }
    } else {
      document.querySelector(".message").textContent = "💥You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretnumber = Math.trunc(20 * Math.random()) + 1;
  score = 20;
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(purple,blue)";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "🤔";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").style.width = "15rem";
});
