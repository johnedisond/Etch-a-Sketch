let container = document.querySelector(".container");

let color = "black";


function gridSize(size) {

    let box = container.querySelectorAll("div");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let gridNums = size * size;

    for (let i = 0; i < gridNums; i++) {
        let box = document.createElement("div");
        box.addEventListener("mouseover", setColor)
        container.append(box);
    }
}
gridSize(16);

// user setting for the size of the grid----------

let size = document.querySelector("#size");

function getSize() {
    let sizeInput = prompt("Enter desired Sketchpad resolution ( 2 - 100 ).");

    while (!(sizeInput >= 2 && sizeInput <= 100)) {
        sizeInput = prompt("Please enter a number between ( 2 - 100 ).");
    }
    if (sizeInput >= 2 && sizeInput <= 100) {
        return sizeInput;
    }
}

size.addEventListener("click", () => {
    let size = getSize();
    gridSize(size);
})


// resetting sketchpad color to white----------

function resetColors() {
    let divs = container.querySelectorAll("div");

    for (let div of divs) {
        div.style.backgroundColor = "white";
    }
}


// setting grid color----------

function setColor() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    } else {
        this.style.backgroundColor = color;
    }
}

function makeColor(colorChoice) {
    color = colorChoice;
}