const rainbows = document.getElementsByClassName("rainbow");
const logo = document.getElementById("logo");
const flying = document.getElementById("flying");
const monkey = document.getElementById("monkey");
function clickButton() {
for(let rainbow of rainbows) {
    if (rainbow.classList.contains("pulse")) {
        rainbow.classList.remove("pulse");
    } else {
        rainbow.classList.add("pulse");
    }
}
}

function clickButton1() {
    monkey.hidden = false;
}

function clickButton2() {
    logo.classList.add("flying");
    setTimeout(() => {
        logo.classList.remove("flying"); 
    }, 3000);
}