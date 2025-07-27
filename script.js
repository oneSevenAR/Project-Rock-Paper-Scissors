function getComputerChoice(){
    val = Math.floor(Math.random()*3);
    if(val==0){
        return "rock";
    }
    else if(val==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Choose rock, paper or scissors");
}

function playRound(humanChoice, computerChoice){
   console.log(`human: ${humanChoice}`);
   console.log(`computer: ${computerChoice}`);

    if(humanChoice==computerChoice){
        console.log("draw");
    }

    else if(humanChoice=="ROCK" && computerChoice=="PAPER"){
        computerScore++;
        console.log(`computer wins the round.`);
        console.log(`current score-> human: ${humanScore}, computer: ${computerScore}`);
    }
    else if(humanChoice=="PAPER" && computerChoice=="SCISSORS"){
        computerScore++;
        console.log(`computer wins the round.`);
        console.log(`current score-> human: ${humanScore}, computer: ${computerScore}`);
    }
    else if(humanChoice=="SCISSORS" && computerChoice=="ROCK"){
        computerScore++;
        console.log(`computer wins the round.`);
        console.log(`current score-> human: ${humanScore}, computer: ${computerScore}`);
    }
    
    else if(computerChoice=="ROCK" && humanChoice=="PAPER"){
        humanScore++;
        console.log(`human wins the round.`);
        console.log(`current score-> human: ${humanScore}, computer: ${computerScore}`);
    }
    else if(computerChoice=="PAPER" && humanChoice=="SCISSORS"){
        humanScore++;
        console.log(`human wins the round.`);
        console.log(`current score-> human: ${humanScore}, computer: ${computerScore}`);
    }
    else if(computerChoice=="SCISSORS" && humanChoice=="ROCK"){
        humanScore++;
        console.log(`human wins the round.`);
        console.log(`current score-> human: ${humanScore}, computer: ${computerScore}`);
    }
    

}

let humanScore=0;
let computerScore=0;

let humanChoice;
let computerChoice;


for(let i=0; i<5; i++){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    playRound(humanChoice, computerChoice);
}

if(humanScore>computerScore){
    console.log('Human wins!!!');
}
else{
    console.log('Computer wins!!!');
}