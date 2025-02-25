/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set()
        const columnSet = new Set()
        const boxSet = new Set()

        for (let j = 0; j < 9; j++) {
            let rowNumber = board[i][j]
            let columnNumber = board[j][i]
            let boxCharacter = board[3*Math.floor(i/3) + Math.floor(j/3)][(i*3)%9+(j%3)]

            if(rowNumber != ".") {
                if(rowSet.has(rowNumber)) return false
                rowSet.add(rowNumber)
            }

            if(columnNumber != ".") {
                if(columnSet.has(columnNumber)) return false
                columnSet.add(columnNumber)
            }

            if(boxCharacter != ".") {
                if(boxSet.has(boxCharacter)) return false
                boxSet.add(boxCharacter)
            }
        }
    }
    return true
};

// Time Complexity: O(N) 
// Space Complexity: O(N)