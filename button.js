const rainbows = document.getElementsByClassName("rainbow");
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
    const monkey = document.getElementById("monkey");
    monkey.hidden = false;
}