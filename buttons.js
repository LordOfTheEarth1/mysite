const logo = document.getElementById("logo");
const flying = document.getElementById("flying");
let flycount = 0;

function flyIcon() {
    logo.classList.add("flying");
    setTimeout(() => {
        logo.classList.remove("flying");
    }, 3000);
    flycount += 1;
    if (flycount >= 5) {
        flycount = 0;
        location.href = 'pong/index.html';
    }
}

const header = document.getElementById("tswheader");
const tabs = document.getElementsByClassName("tab");
const rainbows = document.getElementsByClassName("rainbow");
const parties = document.getElementsByClassName("party");
const scatman = document.getElementById("scatman");
let playing = false;
let playtime = 0;

function partyElements() {
    for (let rainbow of rainbows) {
        if (rainbow.classList.contains("pulseText")) {
            rainbow.classList.remove("pulseText");
        } else {
            rainbow.classList.add("pulseText");
        }
    }
    if (header.classList.contains("pulseBackground")) {
        header.classList.remove("pulseBackground");
    } else {
        header.classList.add("pulseBackground");
    }
    for (let tab of tabs) {
        if (tab.classList.contains("pulseBackground")) {
            tab.classList.remove("pulseBackground");
        } else {
            tab.classList.add("pulseBackground");
        }
    }
    for (let party of parties) {
        if (party.hasAttribute("hidden")) {
            party.removeAttribute("hidden");
        } else {
            party.setAttribute("hidden", "");
        }
    }
    if (playing == false) {
        scatman.play();
        playing = true;
        playtime = 0;
    } else {
        scatman.pause();
        playing = false;
    }
}

function partyTime() {
    partyElements();
    let redirectCount = setInterval(() => {
        if (playing == false) {
            clearInterval(redirectCount);
        }
        playtime += 0.25;
        if (playtime == 30) {
            partyElements();
            location.href = 'clickgame/index.html';
        }
    }, 250);
}

const jokeContainer = document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,explicit&type=single";
let jokecount = 0;

let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `${item.joke}`;
        });
}

function sayJoke() {
    getJoke();
    jokecount += 1;
    if (jokecount >= 10) {
        jokecount = 0;
        location.href = 'numgame/numgame.html';
    }
}