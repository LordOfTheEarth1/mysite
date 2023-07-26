let rainbow = false;
function clickButton() {
    console.log(`button pressed`)
    let rainbow = true;
    const mytext = document.getElementById("mytext");
    if (mytext.className == "pulse") {
        mytext.className = "notpulse"
    } else {
        mytext.className = "pulse";
    }

}