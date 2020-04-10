// Starting colors, will randomize later
let colors = [
    "rgb(255, 0, 0)",
    "rgb(200, 0, 0)",
    "rgb(255, 200, 0)",
    "rgb(255, 0, 100)",
    "rgb(255, 150, 100)",
    "rgb(25, 90, 100)",
];

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
            changeColor(pick)
        } else {
            this.style.backgroundColor = "rgb(24, 22, 22)"; // match the css body background 
            guessDisplay.textContent = "Try Again";
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
    let randomNum = Math.floor(Math.random() * 5 + 1);
    // grabbing the array index of the randomly generated # 
    return colors[randomNum];

};