window.onload = function () {
    displayHighscores();
};
    
function displayHighscores() {
    let highscores = getStoredScores();
    let highscoresList = document.getElementById('highscores');

    if (highscoresList) {

        highscoresList.innerHTML = '';

        highscores.sort((a, b) => b.score - a.score);

        highscores.forEach(score => {
            let listItem = document.createElement('li');
            listItem.textContent = `${score.initials} - ${score.score}`;
            highscoresList.appendChild(listItem);
        });
    }

    let clearButton = document.getElementById('clear');
    if (clearButton && !clearButton.hasAttribute('data-event-attached')) {
        clearButton.setAttribute('data-event-attached', 'true');
        clearButton.addEventListener('click', function() {
            clearHighscores();
        });
    }
}

function getStoredScores() {
    let scores = localStorage.getItem('scores');
    return scores ? JSON.parse(scores) : [];
}

function clearHighscores() {
    localStorage.removeItem('scores');
    document.getElementById('highscores').innerHTML = '';
}
