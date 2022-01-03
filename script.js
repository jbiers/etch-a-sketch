const selectNum = document.getElementById("sqr-num")
const clearBtn = document.getElementById("clear-btn")

let sqrNum, sqrSize

const board = document.getElementById("board")

let boardRow
let boardSquare

clearBtn.addEventListener("click", () => {
    sqrNum = selectNum.options[selectNum.selectedIndex].value
    sqrSize = (512 / sqrNum)

    board.setAttribute("style", "flex-basis: 256px")

    for (let i = 0; i < sqrNum; i++) {
        boardRow = document.createElement('div')
        boardRow.classList.add('board-row')

        /*boardRow.setAttribute("style", "width:512px")
        boardRow.setAttribute("style", "height:256px")*/

        for (let j = 0; j < sqrNum; j++) {
            boardSquare = document.createElement('div')

            boardSquare.setAttribute("style", "width:256px")
            boardSquare.setAttribute("style", "height:256px")

            boardSquare.classList.add('board-square')
            boardSquare.classList.add(j)

            boardRow.appendChild(boardSquare)
        }

        boardRow.classList.add(i)
        board.appendChild(boardRow)
    }
})