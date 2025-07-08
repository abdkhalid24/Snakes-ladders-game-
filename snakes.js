// Global variables
let rollingSound = new Audio("dice-142528.mp3");
let winSound = new Audio("mixkit-winning-notification-2018.wav");

let pTurn = "red";
let redPos = 0;
let bluePos = 0;
// These variables are related to when the player touches them, the position will change.
let snakes = [
  [14, 4],
  [57, 37],
  [67, 51],
  [69, 12],
  [84, 27],
  [93, 72],
  [96, 76],
  [98, 78]
]
let ladders = [
  [2, 40],
  [7, 16],
  [10, 33],
  [23, 87],
  [30, 49],
  [60, 64],
  [71, 91],
  [80, 100]
]

let winner = null;
let diceRoll = 0;

// Show current turn
playerTurn = () => {
  // document.querySelector(".playerTurn").innerText =
  //   pTurn === "red" ? "Red's turn" : "Blue's turn";
  if (pTurn === "red")
    document.querySelector(".playerTurn").innerText = "Red's turn"
  else if (pTurn === "blue") {
    document.querySelector(".playerTurn").innerText = "Blue's turn"
  }
}

updatePosition = (position, playerId) => {
  // To pick randomly number from 1 to 6 in 10 rows
  const row = Math.ceil(position / 10);
  const col = position % 10 === 0 ? 10 : position % 10;

  let left, top;

  if (row % 2 !== 0) {
    left = (0 - col) * 54;
  } else {
    left = (col - 10) * 54;
  }

  top = -(row - -5) * 54;

  const token = document.getElementById(playerId);
  token.style.left = `${left}px`;
  token.style.top = `${top}px`;

}


// Apply snake or ladder
detectSnakesLadders = (position) => {
  for (let [head, tail] of snakes) {
    if (position === head) return tail;
  }
  for (let [bottom, top] of ladders) {
    if (position === bottom) return top;
  }
  return position;
}

// ...check for winner when the player reach the 100 box...
checkWinner = () => {
  // if the redPos reach the 100 it will win!
  if (redPos === 100) {
    document.querySelector(".playerTurn").innerText = "Red Wins!";
    winSound.play();
    // setting time with meli seconds
    setTimeout(() => location.reload(), 2000);
    return true;
  }
  // If bluePos reaches 100 then he wins!
   else if (bluePos === 100) {
    document.querySelector(".playerTurn").innerText = "Blue Wins!";
    winSound.play();

    setTimeout(() => location.reload(), 2000);
    return true;
  }
  return false;
}

// ...First main function...
startGame = () => {
  redPos = 0;
  bluePos = 0;
  pTurn = "red";
  updatePosition(redPos, "p1", 0);
  updatePosition(bluePos, "p2", 15);
  playerTurn();
}

// ...Second main function...
rollingDice = () => {
  if (winner) return;

  if (pTurn === "red") {
    redPos += diceRoll;
    if (redPos > 100) redPos -= diceRoll;
    redPos = detectSnakesLadders(redPos);
    updatePosition(redPos, "p1", 0);

    if (!checkWinner()) pTurn = "blue";
  } else {
    bluePos += diceRoll;

    if (bluePos > 100) bluePos -= diceRoll;
    bluePos = detectSnakesLadders(bluePos);
    updatePosition(bluePos, "p2", 15);
    if (!checkWinner()) pTurn = "red";
  }

  playerTurn();
}

// ...The function where it is response for random numbers (1-6) in empty bar...
document.querySelector(".diceButton").addEventListener("click", function () {
  rollingSound.play();
  diceRoll = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".empty-bar").innerText = diceRoll;
  rollingDice();
});

// ...Initialize on page load...
startGame();
