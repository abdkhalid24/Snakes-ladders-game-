// ...Global variables here...
let massageNum = document.querySelector("#numMassage");
let restartButton = document.querySelector(".restart");
let attemptsNum = document.querySelector(".atemptsDisplay");
let secretNum = Math.round(Math.random() * 50);
let attempts = 0;
let maxAttempts = 5;

// ...number of attempts in the game...
const numberAttempts = () => {
  attempts++;
  attemptsNum.textContent = attempts;
};

// ...The main function of the game...
const secretStatement = () => {
  let guessNum = document.querySelector("#guessBar").value;

  if (guessNum == secretNum) {
    massageNum.innerHTML = "You're correct! good Job :)";
  } else if (guessNum > secretNum && guessNum <= 50) {
    massageNum.innerHTML = "Too high";
  } else if (guessNum < secretNum && guessNum <= 50 && guessNum >= 1) {
    massageNum.innerHTML = "Too low";
  } else if (guessNum > secretNum && guessNum > 50) {
    massageNum.innerHTML = "You've gone too far, enter a number between 1-50";
  } else if (guessNum < secretNum && guessNum < 1) {
    massageNum.innerHTML = "You've landed far, enter a number between 1-50";
  }
// ...calling the attempts after feedback...
  numberAttempts(); 
  let submitBar = document.querySelector(".submitBar");
  let video = document.querySelector(".video");

  if (attempts >= maxAttempts) {
    massageNum.textContent = "You've reached the maximum number of attempts!";
    submitBar.disabled = true;
    video.play();
    return;
  }
};

// ...Restart statement...
document.addEventListener("DOMContentLoaded", function () {

  let restartButton = document.querySelector(".restart");

  restartButton.addEventListener("click", function () {

    location.reload();

  });
});
