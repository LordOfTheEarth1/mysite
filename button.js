function clickButton() {
    const rainbow = document.getElementById("rainbow");
    if (rainbow.className == "pulse") {
        rainbow.className = "notpulse"
    } else {
        rainbow.className = "pulse";
    }
}

function clickButton1() {
    const monkey = document.getElementById("monkey");
    monkey.hidden = false;
}