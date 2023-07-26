const guess = document.getElementById("guess");
const report = document.getElementById("report");
let answer;
let guesses = 0;
function loadGame() {
    guess.max = 100;
    answer = Math.floor(Math.random() * 101);
    console.log(answer);
}

function makeGuess() {
    let myGuess = guess.value;
    guesses += 1;
if (myGuess > answer) {
    report.innerHTML += `<br/>You guessed ${myGuess}, your guess is too high`;
} else if (myGuess < answer) {
    report.innerHTML += `<br/>You guessed ${myGuess}, your guess is too low`;
} else {
    report.innerHTML += `<br/>You guessed ${myGuess}, you guessed correctly in ${guesses} guesses`;
}
}