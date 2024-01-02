window.onload = function () {
    initGame();
};

function initGame() {
    initStartButton();
    resetGameState();
    showStartScreen();

}

function showStartScreen() {
    let startScreen = document.getElementById('start-screen');
    if (startScreen) {
        startScreen.classList.remove('hide');
    }

    let questions = document.getElementById('questions');
    if (questions) {
        questions.classList.add('hide');
    }

    let endScreen = document.getElementById('end-screen');
    if (endScreen) {
        endScreen.classList.add('hide');
    }

    let timerDisplay = document.getElementById('time');
    if (timerDisplay) {
        timerDisplay.textContent = '0';
    }

    let feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.classList.add('hide');
        feedback.textContent = '';
    }
}

function resetGameState() {
    currentTime = START_TIME;
    currentQuestionIndex = 0;
    score = 0;
}

function initStartButton() {
    let startButton = document.getElementById('start');

    if (startButton) {
        startButton.addEventListener('click', function () {
            startGame();
        });
    }
}