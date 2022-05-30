function computerPlay() {
    const moves = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * moves.length);
    console.log(moves[random]);
    return moves[random];
}

function playRound(playerSelection, computerSelection) {
    let comp_move_text = document.querySelector(".comp_move");
    comp_move_text.textContent = "Computer: " + computerSelection;
    let result_text = document.querySelector(".result");

    let draw = "It's a draw. . . You're worthy of my opponent";
    let playerWon = "You won. I'll not forget this day";
    let computerWon = "Ha ha! You're no match for me!";
    let invalidInput = "Your hand is invalid. . . Are you trying to avoid this duel?"

    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "Rock":
                result_text.textContent = draw;
                return 0;
            case "Paper":
                result_text.textContent = computerWon;
                return -1;
            case "Scissors":
                result_text.textContent = playerWon;
                return 1;
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "Paper":
                result_text.textContent = draw;
                return 0;
            case "Scissors":
                result_text.textContent = computerWon;
                return -1;
            case "Rock":
                result_text.textContent = playerWon;
                return 1;
        }
    }
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "Scissors":
                result_text.textContent = draw;
                return 0;
            case "Rock":
                result_text.textContent = computerWon;
                return -1;
            case "Paper":
                result_text.textContent = playerWon; 
                return 1;       
        }
    }
    else {
        result_text.textContent = invalidInput;
        return 2;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (; player_score < 5 && computerScore < 5;) {
        // let playerHand = prompt("Make your choice.", "").toLowerCase();
        let computerHand = computerPlay();
        // console.log(playRound(playerHand, computerHand));
        
        result = playRound(playerHand, computerHand);
        if (result === 1) {
            playerScore++;
        }
        else if (result === -1) {
            computerScore++;
        }
    }
}

function updateWinner(winner) {
    let result_text = document.querySelector(".result");
    if (winner === "player") {
        result_text.textContent = "I admit defeat";
    }
    else {
        result_text.textContent = "Yawn. GGEZ";
    }

    rock_btn.removeEventListener('click', rock);
    paper_btn.removeEventListener('click', paper);
    sci_btn.removeEventListener('click', scissors);
}

function updateScore(playerScore, computerScore) {
    let pScoreContent = document.querySelector('.playerScore');
    let cScoreContent = document.querySelector('.computerScore');

    pScoreContent.textContent = "Player: " + playerScore;
    cScoreContent.textContent = "Computer: " + computerScore;

    if (playerScore === 5) {
        updateWinner("player");
    }
    else if (computerScore === 5) {
        updateWinner("computer");
    }
}

function update(playerHand) {
    let result = playRound(playerHand, computerPlay()); 
    if (result === 1) {playerScore++;} 
    else if (result === -1) {computerScore++;} 
    updateScore(playerScore, computerScore);
}

function rock() {
    update("rock");
}

function paper() {
    update("paper");
}

function scissors() {
    update("scissors");
}

let rock_btn = document.querySelector('.rock_button');
let paper_btn = document.querySelector('.paper_button');
let sci_btn = document.querySelector('.scissors_button');

let playerScore = 0;
let computerScore = 0;

rock_btn.addEventListener('click', rock);
paper_btn.addEventListener('click', paper);
sci_btn.addEventListener('click', scissors);

                            
