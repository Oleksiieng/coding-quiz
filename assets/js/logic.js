const TIME_PER_QUESTION = 15;
const START_TIME = questions.length * TIME_PER_QUESTION;
const PENALTY = 10;
let currentTime, currentQuestionIndex, score;


//Start game
function startGame() {
    showGamePage();
    resetGameState();
    startTimer();
    showNextQuestion();
}

function showGamePage() {
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');
}

// Timer
function startTimer() {
console.log('startTimer');
}

function updateTimer() {
    console.log('updateTimer');
}

function subtractTime(penalty) {
    console.log('subtractTime');
}

//Questions
function showNextQuestion() {
    console.log('showNextQuestion');
}

function checkAnswer(selectedAnswer) {
    console.log('checkAnswer');
}


//end game
function endGame() {
    console.log('endGame');
}

//Score
function saveScore() {
    console.log('saveScore');
}

function getStoredScores() {
    console.log('getStoredScores');
}

