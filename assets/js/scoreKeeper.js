// player1 variables
var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Board");
var p1Score = 0;
//player2 variables
var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Board");
var p2Score = 0;
//other variables
var gameOver = false;
var winningScore = 0;
var resetButton = document.querySelector("#reset");
var inputValue = document.querySelector("input[type=number]");
var winningScoreDisplay = document.querySelector("#final");

// updating p1 scoreboard
p1Button.addEventListener("click", function() {
  // as long as it's not gameover we will keep on adding
  if (!gameOver) {
    p1Score = p1Score + 1;
    // but when reached winningScore we can no longer update
    if (p1Score === winningScore) {
      document.write(
        "<p style='color:red;text-align:center; padding-top:200px; font-size:100px; font-weight:600;font-family: Arial, Helvetica, sans-serif;'>Player 1 has won</p>"
      );

      gameOver = true;
    }
  }

  p1Display.textContent = p1Score;
});
// updating p2 scoreboard
p2Button.addEventListener("click", function() {
  // as long as it's not gameOver we will keep on adding
  if (!gameOver) {
    p2Score = p2Score + 1;
    // but when reached winningScore we can no longer update
    if (p2Score === winningScore) {
      document.write(
        "<p style='color:red;text-align:center; padding-top:200px; font-size:100px; font-weight:600;font-family: Arial, Helvetica, sans-serif;'>Player 2 has won</p>"
      );
      gameOver = true;
    }
  }

  p2Display.textContent = p2Score;
});

// storing the reset function
function reset() {
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
}

//reset everything
resetButton.addEventListener("click", function() {
  reset();
});

inputValue.addEventListener("change", function() {
  //updating the playingTo board
  winningScoreDisplay.textContent = this.value;
  //make it numeric
  winningScore = Number(this.value);
  //in case user changes value in middle of the game
  reset();
});
