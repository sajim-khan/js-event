console.log("Welcome to js dom events");

// Option 2
function makeRed() {
    document.body.style.backgroundColor ='red'
}

// option 3
const makeBlueButton = document.getElementById("make-blue");
        makeBlueButton.onclick = makeBlue;        
function makeBlue() {
    document.body.style.backgroundColor ='blue'
}

//option 3 another way
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor ='purple'
}

