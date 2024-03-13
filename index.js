let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const gameDraw = () => {
  console.log("Game is draw");
  msg.innerText = "Game is draw. Play Again";
  msg.style.backgroundColor = "orange";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You Win!");
    msg.innerText = `Congralution, You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You Lose");
    msg.innerText = `You Lose ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("Choice was Clicked = ", userChoice);
  // Generate computer Choice = Modular
  const compChoice = genCompChoice();
  console.log("Comp Choice = ", compChoice);

  if (userChoice === compChoice) {
    // Game is Draw
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper , scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice)
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was Clicked", userChoice)
    playGame(userChoice);
  });
});
