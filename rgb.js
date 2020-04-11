// Easy or Hard mode based on square numbers, 3 or 6
let numOfSquares = 6;

// Array of randomly generated colors
let colors = generateRandomColors(numOfSquares); 

// Need to select the squares
// selecting by class
let squares = document.querySelectorAll(".square");

// correct guess
let correctPick = pickColor();

// update the RGB value on the game and display it
let colorDisplay = document.querySelector("#rgbDisplay");
colorDisplay.textContent = correctPick;

// message display upon guessing
let guessDisplay = document.querySelector("#pickMessage");

// select h1 background in order to change it for correct guess
let h1 = document.querySelector("h1");

// reset button
let reset = document.querySelector("#reset");

// easy and hard button selectors
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    correctPick = pickColor();
    colorDisplay.textContent = correctPick;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none";
        }
    };
    guessDisplay.textContent = "";

});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    correctPick = pickColor();
    colorDisplay.textContent = correctPick;
    for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = "block";
    };
    guessDisplay.textContent = "";

});

reset.addEventListener("click", function(){
    // reset the square colors and winning color in the display
    colors = generateRandomColors(numOfSquares);
    correctPick = pickColor();
    colorDisplay.textContent = correctPick;
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "rgb(57, 163, 196)";
    reset.textContent = "NEW COLORS";
    guessDisplay.textContent = "";
    
});

// loop through the squares
for(let i = 0; i < squares.length; i++) {
    // add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    // change background to original if wrong
    squares[i].addEventListener("click", function() {
        let pick = this.style.backgroundColor;
        // now compare pick to the correct answer
        if(pick === correctPick) {
            guessDisplay.textContent = "Correct!";
            // run the function for changing colors of all squares
            changeColor(pick);
            h1.style.backgroundColor = pick;
            reset.textContent = "PLAY AGAIN"
        } else {
            this.style.backgroundColor = "rgb(24, 22, 22)"; // match the css body background 
            guessDisplay.textContent = "KEEP TRYING";
            reset.textContent = "NEW COLORS"
        };
    });
}

function changeColor(color) {
    // loop through squares
    for(let i = 0; i < squares.length; i++) {
        // change all square colors to correct pick
        squares[i].style.backgroundColor = color; 
    };  
};

function pickColor() {
    // randomly generate number between 1 - 5
    // .random to generate 0-1, .floor to remove decimals, *5 + 1 to give whole #s through 5
    // using 5 instead of 6 since the array is indexed at 0, a [6] won't work
    let randomNum = Math.floor(Math.random() * colors.length);
    // grabbing the array index of the randomly generated # 
    return colors[randomNum];

};

// Function to generate random rgb colors
function generateRandomColors(num) {
// make an empty array
let arr = [];
// repeat num times
for(let i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColors());
}
// return array
return arr;
};

function randomColors() {
// need red from 0 - 255
let red = Math.floor(Math.random() * 256);
// need green from 0 - 255
let green = Math.floor(Math.random() * 256);
// need blue from 0 - 255
let blue = Math.floor(Math.random() * 256);
// return the rgb random string
return "rgb(" + red + ", " + green + ", " + blue + ")";
};