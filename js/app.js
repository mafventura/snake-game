// * Cached Elements
const board = document.getElementById('board')
document.addEventListener('keydown', snakeMovement)

// * GRID Variables
const width = 20
const height = 20
const cellCount = width * height
let cells = [] //to be able to keep track of positions

// * GAME Variables
const snakeSP = [330]
let snakeCP = snakeSP

let foodSP = 169
let randomNum = Math.floor(Math.random() * 399)

let winner

// * add/remove Classes Fucntions //
function addClass (position, name) {
    cells[position].classList.add(name)
}

function removeClass (position, name) {
    cells[position].classList.remove(name)
}

// * Functions
init()

function init() {
    createGrid()
    startingPositions()
    }

function createGrid() {
    // grid info

    //create grid cells
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div') //creating the cell divs
        cell.innerText = i // text for guidance
        cell.dataset.index = i // text for guidance
        board.appendChild(cell) // appending the cells to the board
        cells.push(cell) // adding each cell to the cells array
    }
}

function startingPositions() {
    addClass(snakeCP, 'snake')
    addClass(foodSP, 'food')
}


function snakeMovement(event) {
    const key = event.key

    const left = 'a'
    const right = 'd'
    const up = 'w'
    const down = 's'
    

    removeClass(snakeCP, 'snake')

    if (key === right && snakeCP % width !== width - 1) { 
        snakeCP += 1
        eatingFood()
    } else if (key === left && snakeCP % width !== 0) {
        snakeCP -= 1
        eatingFood()
    } else if (key === up && snakeCP > width - 1) {
        snakeCP -= 20
        eatingFood()
    } else if (key === down && snakeCP < cellCount - width) {
        snakeCP += 20
        eatingFood()
    } 

    addClass(snakeCP, 'snake')

}

function eatingFood() {

    if (snakeCP === foodSP) {
        removeClass(foodSP, 'food')
        foodSP = randomNum
        addClass(foodSP, 'food')
    }
    
}