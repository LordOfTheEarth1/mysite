const rainbows = document.getElementsByClassName("rainbow");
const parties = document.getElementsByClassName("party");
const logo = document.getElementById("logo");
const flying = document.getElementById("flying");
const monkey = document.getElementById("monkey");

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
    if (party.classList.contains("hidden")) {
        party.classList.remove("hidden");
    } else {
        party.classList.add("hidden",);
    }
}
}

function clickButton2() {
}