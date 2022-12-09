let userScore = 0;
let compScore = 0;

const playGame = () => {
  const userChoice = window.prompt("Rock, paper or scissors?");
  const compChoice = getComputerChoice();
  const winner = getWinner(userChoice, compChoice);

  window.alert(`You chose ${userChoice}. The computer chose ${compChoice}.`);

  if (winner === "user") {
    userScore++;
    window.alert("You won!");
  } else if (winner === "comp") {
    compScore++;
    window.alert("You lost!");
  } else {
    window.alert("It's a draw!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.round(Math.random() * 2);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getWinner = (user, comp) => {
  if (user === comp) {
    return "draw";
  } else if (user === "rock" && comp === "paper") {
    return "comp";
  } else if (user === "rock" && comp === "scissors") {
    return "user";
  } else if (user === "paper" && comp === "rock") {
    return "user";
  } else if (user === "paper" && comp === "scissors") {
    return "comp";
  } else if (user === "scissors" && comp === "rock") {
    return "comp";
  } else if (user === "scissors" && comp === "paper") {
    return "user";
  }
};

while (userScore < 5 && compScore < 5) {
  playGame();
  window.alert(
    `The score is now You: ${userScore} and Computer: ${compScore}.`
  );
}

if (userScore === 5) {
  window.alert("You won the game!");
} else {
  window.alert("You lost the game!");
}