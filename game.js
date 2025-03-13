let pointsBet;
let startBtn = document.getElementById("start-btn");
let reactionBox = document.getElementById("reaction-box");
let resultScreen = document.getElementById("result-screen");
let reactionTimeDisplay = document.getElementById("reaction-time");
let resultMessage = document.getElementById("result-message");
let playAgainBtn = document.getElementById("play-again-btn");

let startScreen = document.getElementById("start-screen");
let gameScreen = document.getElementById("game-screen");

startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", playAgain);

function startGame() {
    pointsBet = parseInt(document.getElementById("points").value);
    startScreen.style.display = "none";
    gameScreen.style.display = "block";

    let randomTime = Math.floor(Math.random() * 3000) + 2000; // Random time between 2-5 seconds
    setTimeout(changeColor, randomTime);
}

function changeColor() {
    reactionBox.textContent = "Click!";
    reactionBox.style.backgroundColor = "#4CAF50";
    let startTime = Date.now();

    reactionBox.addEventListener("click", function () {
        let reactionTime = Date.now() - startTime;
        showResult(reactionTime);
    });
}

function showResult(reactionTime) {
    let result = reactionTime < 500 ? "Excellent!" : reactionTime < 1000 ? "Good!" : "Try Again!";
    reactionTimeDisplay.textContent = reactionTime;
    resultMessage.textContent = `You ${result} Your Bet: ${pointsBet} points.`;
    
    setTimeout(() => {
        resultScreen.style.display = "block";
        gameScreen.style.display = "none";
    }, 500);
}

function playAgain() {
    resultScreen.style.display = "none";
    startScreen.style.display = "block";
    reactionBox.style.backgroundColor = "#d3d3d3";
    reactionBox.textContent = "Wait for it...";
}
