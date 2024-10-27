let currentFontSize = 16;
let darkMode = false;

document.getElementById("bgColor").addEventListener("change", changeBackgroundColor);

document.getElementById("increaseFontBtn").addEventListener("click", increaseFontSize);
document.getElementById("decreaseFontBtn").addEventListener("click", decreaseFontSize);
document.getElementById("toggleDarkModeBtn").addEventListener("click", toggleDarkMode);
document.getElementById("changeFontStyleBtn").addEventListener("click", changeFontStyle);

function changeBackgroundColor() {
    const color = document.getElementById("bgColor").value;
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;
}

function increaseFontSize() {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + "px";
    document.getElementById("chfont").style.fontSize = currentFontSize + "px";
}

function decreaseFontSize() {
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + "px";
        document.getElementById("chfont").style.fontSize = currentFontSize + "px";
    }
}

function toggleDarkMode() {
    darkMode = !darkMode;
    
    if (darkMode) {
        document.body.style.backgroundColor = "#2f2f2f";
        document.documentElement.style.backgroundColor = "#2f2f2f";
        document.getElementById("appearance").style.backgroundColor = "#3d3d3d";
        document.body.style.color = "white";
        document.getElementById("myParagraph").style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.documentElement.style.backgroundColor = "white";
        document.getElementById("appearance").style.backgroundColor = "transparent";
        document.body.style.color = "black";
        document.getElementById("myParagraph").style.color = "black";
    }
}

function changeFontStyle() {
    const currentFont = document.body.style.fontFamily;
    if (currentFont === "Arial, sans-serif") {
        document.body.style.fontFamily = "Georgia, serif";
    } else {
        document.body.style.fontFamily = "Arial, sans-serif";
    }
}
