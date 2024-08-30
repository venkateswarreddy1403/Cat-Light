function switchOff() {
    document.getElementById("bulbImage").src = "./Images/bulb-go-off-img.png";
    document.getElementById("catImage").src = "./Images/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switch Off"
    document.getElementById("switchOn").style.backgroundColor = "#22c55e";
    document.getElementById("switchOff").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("bulbImage").src = "./Images/bulb-go-on-img.png";
    document.getElementById("catImage").src = "./Images/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switch On"
    document.getElementById("switchOn").style.backgroundColor = "#e12d39";
    document.getElementById("switchOff").style.backgroundColor = "#cbd2d9";
}