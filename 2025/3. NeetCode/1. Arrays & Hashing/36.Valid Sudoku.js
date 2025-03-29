/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for(let i = 0; i < board.length; i++) {
        const rowSet = new Set();
        const columnSet = new Set();
        const boxSet = new Set();

        for(let j = 0; j < board.length; j++) {
            const rowNumber = board[i][j];
            const columnNumber = board[j][i];
            const boxNumber = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)];

            if(rowNumber !== '.') {
                if(rowSet.has(rowNumber)) return false;
                rowSet.add(rowNumber);
            }

            if(columnNumber !== '.') {
                if(columnSet.has(columnNumber)) return false;
                columnSet.add(columnNumber);
            }  

            if(boxNumber !== '.') {
                if(boxSet.has(boxNumber)) return false;
                boxSet.add(boxNumber);
            }                 
        }
    }
    return true;
};

// Time Complexity: O(1)
// Space Complexity: O(1)