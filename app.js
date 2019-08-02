const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      //console.log(match.childElementCount);
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //Reset and remove the Animation
    const hands = document.querySelectorAll(".hands img");
    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    //computers options
    const computerOptions = ["rock", "paper", "scissors"];

    //console.log(computerNumber);
    options.forEach(option => {
      option.addEventListener("click", function() {
        //console.log(this);
        //computer random choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //console.log(computerChoice);
        const playerChoice = this.textContent;
        //console.log(playerChoice);
        setTimeout(() => {
          //here we call compareHands
          compareHnads(playerChoice, computerChoice);

          // change the image according to choice
          playerHand.src = `./assets/${playerChoice}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //Update visual score board
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //Compare both hand and update score
  const compareHnads = (playerChoice, computerChoice) => {
    const winnerText = document.querySelector(".winner");
    //console.log(winnerText);

    //checking for tie
    if (playerChoice === computerChoice) {
      winnerText.textContent = "It's a Tie!";
      return;
    }

    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winnerText.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winnerText.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winnerText.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winnerText.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winnerText.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winnerText.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};
game();
