const startBtn = document.getElementById("startbtn");
const gameDiv = document.getElementById("grid");
const player = document.getElementById("player");
const computer = document.getElementById("computer");

// declare variable for who's turn it is
// true = player / false = computer
let turn;

function checkClickTarget(event) {
    let space = event.target;
    turn ? space.innerHTML = "<p>X</p<" : space.innerHTML = "<p>O</p<";
    return turn = !turn; 

    // check all spaces have been used
    // check win game (3 in a row)
    // clear out spaces and start over
};

function checkTurn(turn) {
    if (turn) { 
        player.setAttribute("id", "turn")
        computer.removeAttribute("id", "turn")
    } else {
        computer.setAttribute("id", "turn")
        player.removeAttribute("id", "turn")
    };
};

function startGame() {
    // make it the player's turn
    turn = true;
    checkTurn(turn);
    gameDiv.addEventListener("click", checkClickTarget);
};

function init() {
    console.log("init function")
    // clear out previous game
    // start new game
    startGame();
};

startBtn.addEventListener("click", init);