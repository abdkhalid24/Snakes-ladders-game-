//Global variables here:

let rollingSound = new Audio("dice-142528.mp3")
let winSound = new Audio("mixkit-winning-notification-2018.wav")

let pTurn = "red"
let redPos = 0
let bluePos = 0
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
]
let ladders = [
    [4, 25],
    [13, 46],
    [33, 49],
    [42, 63],
    [50, 69],
    [62, 81],
    [74, 92],
]
let winner = null
let diceRoll

// ...First main function...

playerTurn = () => {
  if (pTurn === "red")
    document.querySelector(".playerTurn").innerText = "Red's turn"
  else if (pTurn === "blue") {
    document.querySelector(".playerTurn").innerText = "Blue's turn"
  }

  document.querySelector("#p1").innerHTML = redPos
  document.querySelector("#p2").innerHTML = bluePos
}
  // ...red position: player 1 in the game...

redPosition = () => {
  let redMove = document.querySelector("#p1")

  redPos += diceRoll

  redMove.style.left = `${redPos * 55}px`
  redMove.style.top = `${redPos * 55}px`
}
// ...blue position: player 2 in the game...
bluePosition = () => {
  let blueMove = document.querySelector("#p2")

  bluePos += diceRoll

  blueMove.style.left = `${bluePos * 55}px`
  blueMove.style.top = `${bluePos * 55}px`
}

// ...Second main function...
startGame = () => {
  // ...local variables here "for winning test...
  pTurn = "red"
  redPos = 0
  bluePos = 0

  playerTurn()
  redPosition()
  bluePosition()

}


// document.getElementById("p1").style.transition = "all linear 0.5s"
// document.getElementById("p2").style.transition = "all linear 0.5s"




// ...The function where it is response for random numbers (1-6) in empty bar...

detectSnakesLadders = (position) => {
    for (let i = 0; i < snakes.length; i++) {
      const head = snakes[i][0];
      const tail = snakes[i][1];
  
      if (position === head) {
        console.log(`Oops! Snake at ${position}, go down to ${tail}`);
        return tail;

      }
    }
  
    for (let i = 0; i < ladders.length; i++) {
      const bottom = ladders[i][0];
      const top = ladders[i][1];
  
      if (position === bottom) {
        console.log(`Nice! Ladder at ${position}, climb up to ${top}`);
        return top;
      }
    }
  
    return position;
  };
// ...local variables here "for the changeing of the position"...
updatePosition = (position, playerId, correction ) => {
    const row = Math.ceil(position / 10); // row 1–10
    const col = position % 10 === 0 ? 10 : position % 10; 
  
    let left, top;
  
    if (row % 2 !== 0) { 
      left = ((10 - col) * 55);
    } else { 
      left = ((col - 1) * 55);
    }
  
    top = (-(row - 1) * 55) - correction;
  playerId = "p1"
    token = document.getElementById("p1");
    token.style.left = `${left}px`;
    token.style.top = `${top}px`;
  };
  

checkWinner = () => {
    // check the winner when the player reach the 100 box
    winSound.play()
    
    if (redPos === 100) {
        document.querySelector(".playerTurn").innerText = "Red's Won!"
    } else if (bluePos === 100) {
        document.querySelector(".playerTurn").innerText = " Blue's Won!"
    }
    location.reload()
}

rollingDice = () => {

  snakes = [
    [27, 5],
    [40, 3],
    [43, 18],
    [54, 31],
    [66, 45],
    [76, 58],
    [99, 41],
    [89, 53],
  ]
  ladders = [
    [4, 25],
    [13, 46],
    [33, 49],
    [42, 63],
    [50, 69],
    [62, 81],
    [74, 92],

]

startGame()
rollingDice()
detectSnakesLadders(15)
updatePosition(15)
checkWinner('p1', 'p2')

}

document.querySelector(".diceButton").addEventListener("click", function () {
  rollingSound.play()

  diceRoll = Math.floor(Math.random() * 6) + 1
  document.querySelector(".empty-bar").innerText = diceRoll
  rollingDice(diceRoll) 
})









