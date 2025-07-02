let button 
let win

p2sum = 0
p2sum = 0


play=(player, playerSum, number, correct) => {
    if (playerSum === p1sum )
        playerSum = p1sum + number

    if (p1sum > 100)
        p1sum = p1sum - number
    

    if (p1sum === 4) {
        p1sum = 25
    }
    if (p1sum === 13){
        p1sum = 46
}
    if (p1sum === 33){
        p1sum = 49
    }
    if (p1sum === 42){
        p1sum = 63
    }
    if (p1sum === 50){
        p1sum = 69
    }
    if (p1sum === 62){
        p1sum = 81
    }
    if (p1sum === 74){
        p1sum = 92 
    }
/*******/
    if (p1sum === 27) {
        p1sum = 5
    }
    if (p1sum === 40) {
        p1sum = 3
    }
    if (p1sum === 43) {
        p1sum = 18
    }
    if (p1sum === 54) {
        p1sum = 31
    }
    if (p1sum === 66) {
        p1sum = 45
    }
    if (p1sum === 76) {
        p1sum = 58
    }
    if (p1sum === 89) {
        p1sum = 53
    }
    if (p1sum === 99) {
    }   p1sum = 41

////////////////////

if (playerSum === p2sum ) {
    playerSum = p2sum + number
}
if (p2sum > 100) {
    p2sum = p2sum - number
}

if (p2sum === 4) {
    p2sum = 25
}
if (p2sum === 13) {
    p2sum = 46
}
if (p2sum === 33) {
    p2sum = 49
}
if (p2sum === 42) {
    p2sum = 63
}
if (p2sum === 50) { 
    p2sum = 69
}
if (p2sum === 62) {
    p2sum = 81
}
if (p2sum === 74) { 
    p2sum = 92 
}
/**********/

if (p2sum === 27) {
    p2sum = 5
}
if (p2sum === 40) {
    p2sum = 3
}
if (p2sum === 43) {
    p2sum = 18
}
if (p2sum === 54) {
    p2sum = 31
}
if (p2sum === 66) {
    p2sum = 45
}
if (p2sum === 76) {
    p2sum = 58
}
if (p2sum === 89) {
    p2sum = 53
}
if (p2sum === 99) {
    p2sum = 41
} 

}


// //Global variables here:


// // cached element refrences:
// Define the variables that I need 

// Store element refrences

// The state of the game should be reduce it

// create reset button

// Difine constants

// Global variables here

// functions for game logical here

// Event listenes here










// let var1 = //array that represent 
// let var2 = 
// let var3 =



const messageEL = document.querySelector("#message") <== "if it is an ID"
const squareEls = document.querySelector(".sqr") <== "if it is a class"
const allDivs = document.querySelectorAll("div") <== "if it is orginal"

// borad = [1,2,3,4,5]

// squareEls.forEach ((square, index)=> {
// square.innerHtml = board[index]
// })
