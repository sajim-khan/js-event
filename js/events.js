// option 1
//<button onclick="console.log('i am clicked')">Click me</button>

// Option 2: add onclick function on the html element

//<button onclick="makeRed()">Make red</button>
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

//option 4: 
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor ='pink'
}

// another option 4
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen (){
    document.body.style.backgroundColor ='green';
})

// Option mostly used
document.getElementById('make-orange').addEventListener('click', function() {
    document.body.style.backgroundColor = 'orange';
})
