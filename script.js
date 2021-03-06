/**
 * Odin Project - Foundations Course
 * Build an Etch a Sketch game
 * Should have a board with fixed size
 * User should be able to choose number of squares inside the board
 * Board can be cleaned
 * User can also choose between black and rainbow mode
 * Rainbow mode has randomly generated colors
 */

const selectNum = document.getElementById("sqr-num")
const clearBtn = document.getElementById("clear-btn")

const radioRainbow = document.getElementById("rainbow")
const radioBlack = document.getElementById("black")

let sqrNum, sqrSize

const board = document.getElementById("board")

let boardRow
let boardSquare
let boardChildren

let black = true

// listen for color changes
radioRainbow.addEventListener('click', () => {
    black = false
})

radioBlack.addEventListener('click', () => {
    black = true
})

// clear board and make new one with determined size
clearBtn.addEventListener("click", () => {
    boardChildren = Array.from(document.getElementsByClassName('board-row'))
    boardChildren.forEach(child => {
        child.style.backgroundColor = 'white'
        child.remove()
    })


    sqrNum = selectNum.options[selectNum.selectedIndex].value
    sqrSize = (512 / sqrNum)

    for (let i = 0; i < sqrNum; i++) {
        boardRow = document.createElement('div')
        boardRow.classList.add('board-row')

        boardRow.style.width = '512px'
        boardRow.style.height = sqrSize + 'px'


        for (let j = 0; j < sqrNum; j++) {
            boardSquare = document.createElement('div')

            boardSquare.classList.add('board-square')
            boardSquare.classList.add(j)

            boardSquare.style.width = sqrSize + 'px'
            boardSquare.style.height = sqrSize + 'px'

            boardRow.appendChild(boardSquare)
        }

        boardRow.classList.add(i)
        board.appendChild(boardRow)
    }
})

// Alternate between color modes
board.addEventListener('mouseover', event => {
    if (event.target.classList[0] == 'board-square') {
        if (black == true) {
            event.target.style.backgroundColor = "black"
        }

        if (black == false) {
            event.target.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        }
    }
})