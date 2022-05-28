function computerPlay() {
    const months = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * months.length);
    console.log(months[random]);
    return months[random];
}

function playRound(playerSelection, computerSelection) {
    let draw = "It's a draw. . . You're worthy of my opponent";
    let playerWon = "You won. I'll not forget this day";
    let computerWon = "Ha ha! You're no match for me!";
    let invalidInput = "Your hand is invalid. . . Are you trying to avoid this duel?"

    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "Rock":
                return draw;
            case "Paper":
                return computerWon;
            case "Scissors":
                return playerWon;
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "Paper":
                return draw;
            case "Scissors":
                return computerWon;
            case "Rock":
                return playerWon;
        }
    }
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "Scissors":
                return draw;
            case "Rock":
                return computerWon;
            case "Paper":
                return playerWon;        
        }
    }
    else {
        return invalidInput;
    }
}

