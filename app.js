let container = document.querySelector(".container");
let pen = document.querySelector(".pen");

let color = "black";
let penActive = false;


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
    resetColors();
    penActive = false;
    pen.textContent = "PEN UP";
})


function resetColors() {
    let divs = container.querySelectorAll("div");

    for (let div of divs) {
        div.style.backgroundColor = "white";
    }
}


// setting grid color----------

function setColor() {
    if (penActive) {
        if (color === "random") {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        } else {
            this.style.backgroundColor = color;
        }
    }
}

function makeColor(colorChoice) {
    color = colorChoice;
}

addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === " ") {
        penActive = !penActive;
        if (penActive) {
            pen.textContent = "PEN DOWN";
            e.preventDefault();

        } else {
            pen.textContent = "PEN UP";
            e.preventDefault();
        }
    }
    if (e.key === "1") {
        const btnBlack = document.querySelector("#black");
        btnBlack.click()
        btnBlack.focus();
        btnBlack.classList.add("active");

    } else if (e.key === "2") {
        const btnErase = document.querySelector("#erase");
        btnErase.click()
        btnErase.focus();
        btnErase.classList.add("active");

    } else if (e.key === "3") {
        const btnRandom = document.querySelector("#random");
        btnRandom.click()
        btnRandom.focus();
        btnRandom.classList.add("active");
    }
})
