function getComputerChoice(){
    return 'Rock','Paper','Scissors'
}

//console.log(getComputerChoice)

/*function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock','RocK','ROCK')
       (computerSelection === 'Paper')
    {
        console.log ("You Lose! Paper beats Rock");
    
    }  (playerSelection === 'scissors','Scissors','SCISSORS')
       (computerSelection === 'Paper')
    {
        console.log ("You Lose! Paper beats scissors");
    }
    
}
/*const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/

function game(){}
let playerScore = 0;
let computerScore= 0;
let moves = 0;


function playRound(){}

 playerSelection = prompt("Choose one: rock,paper,or scissors"); 
 computerSelection = getComputerChoice();

 console.log(playerSelection)
 console.log(computerSelection)

 for (let i = 0; i < 5; i++) {
    playRound();
 
 }
 if (playerSelection === computerSelection);{

     alert ("Tie");
 }
 
 if  (playerSelection === 'rock','RocK','ROCK');{
      (computerSelection === 'Paper');

     alert ("You Lose! Paper beats Rock");

} if (playerSelection === 'scissors','Scissors','SCISSORS');
     (computerSelection === 'Paper');
{
     alert ("You Lose! Paper beats scissors");
}
if   (playerSelection === 'paper');
     (computerSelection === 'Rock');
{
     alert ("You Win! Paper beats Computer");
}
if   (playerSelection === 'paper');{
     (computerSelection === 'Scissors');
}
     alert ("You Win! Paper beats Computer");

