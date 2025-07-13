// ...Global variables here...
let massageNum = document.querySelector("#numMassage");
let attemptsNum = document.querySelector(".atemptsDisplay");
let secretNum = Math.round(Math.random() * 50);
let restartButton = document.querySelector(".restart");
// Number of attempts is 5 for each round
let attempts = 0;
let maxAttempts = 5;

let winAudio = new Audio("mixkit-achievement-bell-600.wav")
let loseAudio = new Audio("preview.mp3")
// ...number of attempts in the game...
const numberAttempts = () => {
  attempts++;
  attemptsNum.textContent = attempts;
};

// ...The main function of the game...
const secretStatement = () => {
  let guessNum = document.querySelector("#guessBar").value;

  if (guessNum == secretNum) { 
    massageNum.innerHTML = "You're correct! good Job :)"; // if guessNum is equal to secret
    winAudio.play()
  } else if (guessNum > secretNum && guessNum <= 50) { 
    massageNum.innerHTML = "Too high"; //if guessNum between the main number and less than 50
  } else if (guessNum < secretNum && guessNum <= 50 && guessNum >= 1) {
    massageNum.innerHTML = "Too low"; //if guessNum less than secret and in the range of 1 to 50
  } else if (guessNum > secretNum && guessNum > 50) {
    massageNum.innerHTML = "You've gone too far, enter a number between 1-50"; // if guessNum more than 50
  } else if (guessNum < secretNum && guessNum < 1) {
    massageNum.innerHTML = "You've landed far, enter a number between 1-50"; // if guessNum less than 50
  }
// ...calling the attempts after feedback...
  numberAttempts(); 
  let submitBar = document.querySelector(".submitBar"); // the bar of submission

  if (attempts >= maxAttempts) {
    massageNum.textContent = "You've reached the maximum number of attempts!";
    submitBar.disabled = true;
    // when player reached the maximum num of attempts
    winAudio.play()
};
}

// ...Restart statement...
document.addEventListener("DOMContentLoaded", function () {

  let restartButton = document.querySelector(".restart");

  restartButton.addEventListener("click", function () {

    location.reload();

  });
})
