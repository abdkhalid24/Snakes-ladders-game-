//Global variables here:

let tog = 1;
let rollingSound = new Audio("rpg-dice-rolling-95182.mp3");
let winSound = new Audio("winharpsichord-39642.mp3");

let playerTurn = "red";
let redPlace = 0;
let bluePlace = 0;
// ...player moves when he reach to the snake...
let snakes = [
  [27, 5],
  [40, 3],
  [43, 18],
  [54, 31],
  [66, 45],
  [76, 58],
  [99, 41],
  [89, 53],
];
let ladders = [
  [4, 25],
  [13, 46],
  [33, 49],
  [42, 63],
  [50, 69],
  [62, 81],
  [74, 92],
];
let winner = null;
let diceRoll;

startGame = () => {
  // ...local variables here "for winning test...
  let redPos = 0;
  let bluePos = 0;

  playerTurn = (turn) => {
    if (turn === "red")
      document.querySelector(".playerTurn").innerText = "Red's turn";
    else if (turn === "blue") {
      document.querySelector(".playerTurn").innerText = "Blue's turn";
    }
  };
  updatePosition = () => {
    // ...local variables here "for the changeing of the position"...
    let redPosX = 0;
    let redPosY = 0;
    let bluePosX = 0;
    let bluePosY = 0;
    // ...red position: player 1 in the game...
    redPosition = () => {
      let redMove = document.querySelector("#p1");

      redPosX += 1;
      redPosY += 1;

      redMove.style.left = `${redPosX * 62}px`;
      redMove.style.top = `${redPosY * 62}px`;
    };
    // ...red position: player 2 in the game...
    bluePosition = () => {
      let blueMove = document.querySelector("#p2");

      bluePosX += 1;
      bluePosY += 1;

      blueMove.style.left = `${bluePosX * 62}px`;
      blueMove.style.top = `${bluePosY * 62}px`;
    };
  };
};
// ...The function where it is response for random numbers (1-6) in empty bar...
rollingDice = () => {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".empty-bar").innerText = diceRoll;
};
document.querySelector(".diceButton").addEventListener("click", rollingDice);

upateDisplay = () => {};

detectSnakeLadder = () => {};
