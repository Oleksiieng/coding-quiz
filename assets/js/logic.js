const TIME_PER_QUESTION = 15;
const START_TIME = questions.length * TIME_PER_QUESTION;
const PENALTY = 10;
let currentQuestionIndex = 0;
let score = 0;
let currentTime;
let timerInterval;


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
    updateTimerDisplay();

    timerInterval = setInterval(function () {
        if (currentTime <= 0) {
            endGame();
        } else {
            currentTime--;
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    let timerElement = document.getElementById('time');
    if (timerElement) {
        timerElement.textContent = currentTime;
    }
}

function subtractTime(penalty) {
    currentTime = currentTime - penalty;
    if (currentTime < 0) {
        currentTime = 0;
    }
    console.log('subtractTime');
}

//Questions
function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        let question = questions[currentQuestionIndex];

        document.getElementById('question-title').textContent = question.question;

        let choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        question.choices.forEach(choice => {
            let button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', () => checkAnswer(choice));
            choicesContainer.appendChild(button);
        });

    } else {

        endGame();

    }
}

function checkAnswer(selectedAnswer) {
    let correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer !== correctAnswer) {
        subtractTime(PENALTY);
    }

    currentQuestionIndex++;

    showNextQuestion();
}

//End game
function endGame() {
    clearInterval(timerInterval);

    document.getElementById('questions').classList.add('hide');
    document.getElementById('end-screen').classList.remove('hide');

    score = currentTime;
    document.getElementById('final-score').textContent = score;
    updateTimerDisplay();

    document.getElementById('submit').addEventListener('click', function () {
        saveScore();
    });
}

//Score
function saveScore() {
    let initials = document.getElementById('initials').value;
    if (!initials) {
        alert('Please enter initials');
        return;
    }

    let storedScores = getStoredScores();

    storedScores.push({ initials: initials, score: score });

    localStorage.setItem('scores', JSON.stringify(storedScores));

    window.location.href = 'highscores.html';
}

function getStoredScores() {
    let scores = localStorage.getItem('scores');
    return scores ? JSON.parse(scores) : [];
}

