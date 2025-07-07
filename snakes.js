//Global variables here:

let tog = 1;
let rollingSound = new Audio("dice-142528.mp3");
let winSound = new Audio("mixkit-winning-notification-2018.wav");

let pTurn = "red";
let redPos = 0;
let bluePos = 0;
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


// ...First main function...
startGame = () => {
  // ...local variables here "for winning test...
  let pTurn = "red";
  let redPos = 0;
  let bluePos = 0;
  
  playerTurn = (turn) => {
    if (pTurn === "red")
      document.querySelector(".playerTurn").innerText = "Red's turn";
    else if (pTurn === "blue") {
      document.querySelector(".playerTurn").innerText = "Blue's turn";
    }
    
    document.querySelector("#p1").innerHTML = redPos;
    document.querySelector("#p2").innerHTML = bluePos;
  };
  
  // ...red position: player 1 in the game...
};
redPosition = () => {
  let redMove = document.querySelector("#p1");
  
  redPos += 1;
  
  redMove.style.left = `${redPos * 55}px`;
  redMove.style.top = `${redPos * 55}px`;
};
// ...red position: player 2 in the game...
bluePosition = () => {
  let blueMove = document.querySelector("#p2");
  
  bluePos += 1;
  
  blueMove.style.left = `${bluePos * 55}px`;
  blueMove.style.top = `${bluePos * 55}px`;
};

// ...Second main function...

rollingDice = () => {
  let snakes;
  let ladders;
  
  // ...The function where it is response for random numbers (1-6) in empty bar...
  document.querySelector(".diceButton").addEventListener("click", function () {
    rollingSound.play();
    
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".empty-bar").innerText = diceRoll;
  });

  numarr = Array.from(String(detectSnakesLadders()))
  n1 = eval(numarr.shift())
  n2 = eval(numarr.pop())
  updatePosition = (correction) => {
    // ...local variables here "for the changeing of the position"...
    if (n1 % 2 != 0) {
      if (n2 == 0) {
        document.getElementById("p1").style.left = `${9 * 55}px`;
        document.getElementById("p1").style.top = `${
          (-n1 + 1) * 55 - correction}px`;
      } else {
        document.getElementById("p2").style.left = `${(9 - (n2 - 1)) * 55}px`;
        document.getElementById("p2").style.top = `${-n1 * 55 - correction}px`;
      }
    } else if (n1 % 2 == 0) {
      if (n2 == 0) {
        document.getElementById("p1").style.left = `${0 * 55}px`;
        document.getElementById("p1").style.top = `${
          (-n1 + 1) * 55 - correction}px`;
      } else {
        document.getElementById("p2").style.left = `${(n2 - 1) * 55}px`;
        document.getElementById("p2").style.top = `${-n1 * 55 - correction}px`;
      }
    }
  };

  detectSnakesLadders = (position) => {
    //... is the function for transformation of head and bottom of the snakes and ladders ...
    for (let i = 0; i < snakes.length; i++) {
      if (position === snakes[i].head) {
        console.log(`Oops! Snake at ${position}, go down to ${snakes[i].tail}`);
        return snakes[i].tail;
      }
    }

    for (let i = 0; i < ladders.length; i++) {
      if (position === ladders[i].bottom) {
        console.log(
          `Nice! Ladder at ${position}, climb up to ${ladders[i].top}`
        );
        return ladders[i].top;
      }
    }

    return position;
  };

  checkWinner = () => {
    // check the winner when the player reach the 100 box
    winSound.play()

    if ("red" === 100) {
      document.querySelector(".playerTurn").innerText = "Red's Won!";
    } else if ("blue" === 100) {
      document.querySelector(".playerTurn").innerText = "Blue's Won!";
    }
    location.reload();
  };
};
startGame()
rollingDice()


upateDisplay = () => {};
