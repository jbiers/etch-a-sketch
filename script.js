const selectNum = document.getElementById("sqr-num")
const clearBtn = document.getElementById("clear-btn")

let sqrNum, sqrSize

const board = document.getElementById("board")

let boardRow
let boardSquare

clearBtn.addEventListener("click", () => {
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