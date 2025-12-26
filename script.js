let player1 = {
    id: 1,
    name: "Ram",
    score: 0,
};
let player2 = {
    id: 2,
    name: "Shyam",
    score: 0,
}

// 1 -> X
// 2 -> O

let currentPlayer = 1;

const grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8],//rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
    [0, 4, 8], [2, 4, 6] //diagonals
]

let cells = document.getElementsByClassName('cell');

// Current status (turn)
let turn = document.getElementById('status');
turn.innerText = `${player1.name}'s Turn`;

// Dialog
let dlg = document.getElementById('dlg');


//Ok Button in dialog
const okButton = document.getElementById('ok-button');
okButton.addEventListener('click', handleOkClick)

//Reset Game
const resetButton = document.getElementById('reset-button')
resetButton.addEventListener('click', handleGameReset)


//Set Note
let note = document.getElementById('note');
note.innerText = "";


//Game Board
let gameBoard = document.getElementById('game-board');
gameBoard.style.pointerEvents = "all";


function handleOkClick() {
    dlg.close();
}

function handleCellClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const index = e.target.dataset.index;
    //console.log(index);
    let displayX = document.querySelector(`.cell[data-index="${index}"] .x`).style.display;
    let displayO = document.querySelector(`.cell[data-index="${index}"] .o`).style.display;

    const justPlayed = currentPlayer;

    if (currentPlayer == 1 && !displayX && !displayO) {
        document.querySelector(`.cell[data-index="${index}"] .o`).style.display = "block";
        turn.innerText = `${player2.name}'s Turn`
        currentPlayer = 2;
    } else if (!displayO) {
        document.querySelector(`.cell[data-index="${index}"] .x`).style.display = "block";
        turn.innerText = `${player1.name}'s Turn`
        currentPlayer = 1;
    }

    let hasWon = handleCheckWin(index, justPlayed);
    if (hasWon) {
        dlg.showModal();
        document.getElementById('dialog-msg').innerText = `Congratulation! Winner!  ${justPlayed === 1 ? player1.name : player2.name}!`;
        
        //Score update
        if (justPlayed === 1) {
            document.getElementById('player1-score').innerText = `${player1.name}: ${player1.score}`;
        } else {
            document.getElementById('player2-score').innerText = `${player2.name}: ${player2.score}`;
        }

        //Set Note
        note.innerText = 'Note: Please reset this game to continue...';
        turn.innerText = '';
        gameBoard.style.pointerEvents = "none";
        gameBoard.style.opacity = "0.4";

    } else {
        let draw = handleDraw();
        // console.log("draw", draw);
        // console.log("grid", grid);
        if (draw) {
            dlg.showModal()
            document.getElementById('dialog-msg').innerText = `That's a draw!!!`;
        }
    }
}


function handleDraw() {
    for (let g of grid) {
        if (g === -1) {
            return false;
        }
    }
    return true;
}


function handleCheckWin(index, justPlayed) {
    grid[index] = justPlayed;
    for (let winComb of winning) {
        if (grid[winComb[0]] === grid[winComb[1]] && grid[winComb[1]] === grid[winComb[2]] && (grid[winComb[0]] == 1 || grid[winComb[0]] == 2)) {
            if (justPlayed == 1) {
                player1.score += 1;
            } else {
                player2.score += 1;
            }
            return true;
        }
    }
    return false;
}


function handleGameReset() {
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.cell[data-index="${i}"] .x`).style.display = "";
        document.querySelector(`.cell[data-index="${i}"] .o`).style.display = "";
        grid[i] = -1;
    }
    turn.innerHTML = `${player1.name}'s Turn`;
    note.innerText = '';
    gameBoard.style.pointerEvents = "all";
    gameBoard.style.opacity = "1"
    currentPlayer = 1;
}


for (let cell of cells) {
    cell.addEventListener('click', handleCellClick)
}




// console.log(cell);
