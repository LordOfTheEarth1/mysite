const guess = document.getElementById("guess");
const result = document.getElementById("result");
let answer;
function loadGame() {
    guess.max = 100;
    answer = math.floor(math.random()*101);
    result.innerHTML = answer;
}

function makeGuess() {

}