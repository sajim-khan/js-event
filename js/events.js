console.log("Welcome to js dom events");

// Option 2
function makeRed() {
    document.body.style.backgroundColor ='red'
}

const makeBlueButton = document.getElementById("make-blue");
        makeBlueButton.onclick = makeBlue;
        
function makeBlue() {
    document.body.style.backgroundColor ='blue'
}