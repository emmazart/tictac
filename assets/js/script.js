const startBtn = document.getElementById("startbtn");
const gameDiv = document.getElementById("grid");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
let spacesLeft = 9;
let win = false;


// declare variable for who's turn it is
// true = player / false = computer
let turn;

function checkTurn(turn) {
    if (turn) { 
        player.setAttribute("id", "turn")
        computer.removeAttribute("id", "turn")
    } else {
        computer.setAttribute("id", "turn")
        player.removeAttribute("id", "turn")
    };
};

function checkWin() {
    const columns = document.getElementsByClassName("column");
    let columnsArr = [];

    // turn columns into an array so we can map it
    for (const col of columns) {
        columnsArr.push(col);
    };

    const spaces = columnsArr.map((col) => col.children[0].innerText);
    console.log(spaces);

    // [ 0, 3, 6]
    // [ 1, 4, 7]
    // [ 2, 5, 8]

    // check all spaces have been used
    // check win game (3 in a row)
    // let token = ["X", "O"];
    // for (let x = 0; x < token.length; x++){
    //     if (spaces[0] === token[x] & spaces[1] === token[x] & spaces[2] === token[x]){
    //         x = 0 ? win = true : win = false;
    //     } else if (spaces[0] === token[x] & spaces[3] === token[x] & spaces[6] === token[x]) {
    //         x = 0 ? win = true : win = false;
    //     } else if (spaces[0] === token[x] & spaces[4] === token[x] & spaces[8] === token[x]) {
    //         x = 0 ? win = true : win = false;
    //     }  else if (spaces[8] === token[x] & spaces[5] === token[x] & spaces[2] === token[x]) {
    //         x = 0 ? win = true : win = false;
    //     } else if (spaces[8] === token[x] & spaces[7] === token[x] & spaces[6] === token[x]) {
    //         x = 0 ? win = true : win = false;
    //     }  else if (spaces[3] === token[x] & spaces[4] === token[x] & spaces[5] === token[x]) {
    //         x = 0 ? win = true : win = false;
    //     } else if (spaces[1] === token[x] & spaces[4] === token[x] & spaces[7] === token[x]) {
    //         x = 0 ? win = true : win = false;
    //     } else if (spaces[2] === token[x] & spaces[4] === token[x] & spaces[6] === token[x]) {
    //         x = 0 ? win = true : win = false;
    //     } else {
    //       return;
    //     }
    // }

    
    // clear out spaces and start over
}

function checkClickTarget(event) {
    let space = event.target;
    turn ? space.innerHTML = "<p>X</p<" : space.innerHTML = "<p>O</p<";
    turn = !turn; 
    spacesLeft--;

    if (spacesLeft <=4){
        checkWin();
    };

    checkTurn(turn);

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