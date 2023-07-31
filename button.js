const rainbows = document.getElementsByClassName("rainbow");
const parties = document.getElementsByClassName("party");
const logo = document.getElementById("logo");
const flying = document.getElementById("flying");
const monkey = document.getElementById("monkey");
const scatman = document.getElementById("scatman");
let playing = false;
let jokecount = 0;

function clickButtonHome() {
    logo.classList.add("flying");
    setTimeout(() => {
        logo.classList.remove("flying"); 
    }, 3000);
}

function clickButton1() {
for(let rainbow of rainbows) {
    if (rainbow.classList.contains("pulse")) {
        rainbow.classList.remove("pulse");
    } else {
        rainbow.classList.add("pulse");
    }
}
for(let party of parties) {
    if (party.hasAttribute("hidden")) {
        party.removeAttribute("hidden");
    } else {
        party.setAttribute("hidden", "");
    }
}
if (playing == false) {
    scatman.play();
    playing = true;
} else {
    scatman.pause();
    playing = false;
}
}

const jokeContainer = document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
    });
}

function clickButton2() {
    getJoke();
    jokecount += 1;
    if (jokecount >= 10) {
        jokecount = 0;
        location.href = 'numgame/numgame.html';
    }
}