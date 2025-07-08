

// function randomly returns rock , paper or scissors

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3) ;
    
    if (rand == 0){
        return "rock";
    }
    if (rand == 1 ){
        return "paper";
    }
    if (rand == 2 ){
        return "scissors";
    }
}

/// write a function that asks for the humans choice, and returns it

// function that gets the users choice
function getHumanChoice(){
        //prompt to choose
        let choice = prompt("Rock paper scissors shoot!")


        /// if user doesn't choose, print ("Make your choice Human!")
        if (choice === null){
            log.innerText = "Make your choice Human!";
        }

        /// if user chooses return chosen value
        else if (choice.toLowerCase() === "rock"){
            return "rock";
        }
        else if (choice.toLowerCase() === "paper"){
            return "paper";
        }
        else if (choice.toLowerCase() === "scissors"){
            return "scissors";
        }
        /// if user types something else tell them to choose one of the three
        else {
            prompt("Choose either rock, paper or scissors!")
        }
}

/// function to play a round , takes human  & computer choice as arguments
function playRound(computerChoice, humanChoice){

    

    ////return draw if human choice and computer choice is the same, eg rock vs rock.
    if (computerChoice === humanChoice) {
        console.log(`${humanChoice} vs ${computerChoice} is a Draw!`)
        return "draw";
    }
    ///if human chooses rock, check to see what computer chooses between the other 2
    else if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            console.log(`${humanChoice} vs ${computerChoice} is a Win!`)
            return "win";
        }
        else if (computerChoice === "paper"){
            console.log(`${humanChoice} vs ${computerChoice} is a Lose!`)
            return "lose";
        }
    }

    ///if human chooses paper, check to see what computer chooses between the other 2
    else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log(`${humanChoice} vs ${computerChoice} is a Loss!`)
            return "lose";
        }
        else if (computerChoice === "rock"){
            console.log(`${humanChoice} vs ${computerChoice} is a Win!`); 
            return "win";
        }
    }

    ///if human chooses scissors, check to see what computer chooses between the other 2
    else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            console.log(`${humanChoice} vs ${computerChoice} is a Loss!`)
            return "lose";
        }
        else if (computerChoice === "paper"){
            console.log(`${humanChoice} vs ${computerChoice} is a Win!`)
            return "win";
        }
        
    }
 }
    




function playGame(){
    /// log computer & human score
    let computerScore = 0;
    let humanScore = 0;

    
    for (let round = 0; round < 5; round++){
    
        let result = playRound(getComputerChoice(), getHumanChoice());
        if (result === "win"){
            humanScore++;
        }
        if (result === "lose"){
            computerScore++;
        }
        
    
    console.log(`Human: ${humanScore}`);
    console.log(`Robot: ${computerScore}`);
    }
}

///play a round




console.log(playGame());

    

///console.log(playRound(getComputerChoice(), getHumanChoice()));