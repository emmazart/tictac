const startBtn = document.getElementById("startbtn");
const gameDiv = document.getElementById("grid");
// declare variable for who's turn it is
let turn = true;

function checkClickTarget(event) {
    let space = event.target.getAttribute("data-blank");
    return space;
};

function startGame() {
    gameDiv.addEventListener("click", checkClickTarget);
    // toggle back and forth between whos turn it is
};

function init() {
    console.log("init function")
    // clear out previous game
    // start new game
    startGame();
};

startBtn.addEventListener("click", init);