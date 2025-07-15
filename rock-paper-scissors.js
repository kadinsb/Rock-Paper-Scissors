

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
    




const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const humanSpan = document.querySelector("#humanscore");
const robotSpan = document.querySelector("#robotscore");


let humanScore = 0;
let robotScore = 0;

humanSpan.textContent = humanScore ;
robotSpan.textContent = robotScore ;

function reset(){
    humanScore = 0;
    robotScore = 0;
    humanSpan.textContent = humanScore ;
    robotSpan.textContent = robotScore ;
}



rock.addEventListener("click", () => {
    let result = playRound(getComputerChoice(), `rock`);
    if (result === "win"){
        humanScore = humanScore + 1;
        humanSpan.textContent = humanScore ;
        if (humanScore === 5){
            alert("Human Wins!!!");
            reset();
        }

    }
    if (result === "lose"){
        robotScore++;
        robotSpan.textContent = robotScore ;
        if (robotScore === 5){
            alert("YOU LOSE :P !!!");
            reset();
        }

    }
});

paper.addEventListener("click", () => {
    let result = playRound(getComputerChoice(), `paper`);
    if (result === "win"){
        humanScore = humanScore + 1;
        humanSpan.textContent = humanScore ;
        if (humanScore === 5){
            alert("Human Wins!!!");
            reset();
        }

    }
    if (result === "lose"){
        robotScore++;
        robotSpan.textContent = robotScore ;
        if (robotScore === 5){
            alert("YOU LOSE :P !!!");
            reset();
        }


    }
});

scissors.addEventListener("click", () => {
        let result = playRound(getComputerChoice(), `scissors`);
    if (result === "win"){
        humanScore = humanScore + 1;
        humanSpan.textContent = humanScore ;
        if (humanScore === 5){
            alert("Human Wins!!!");
            reset();
        }

    }
    if (result === "lose"){
        robotScore++;
        robotSpan.textContent = robotScore ;
        if (robotScore === 5){
            alert("YOU LOSE :P !!!");
            reset();
        }


    }
});



    

