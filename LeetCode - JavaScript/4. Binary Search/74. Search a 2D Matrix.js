/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0) {
        return false;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    let i = 0;
    let j = rows * cols - 1; 

    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        const midRow = Math.floor(mid / cols);
        const midCol = mid % cols;
        const num = matrix[midRow][midCol];

        if (num === target) {
            return true;
        } else if (num < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return false;
};

// Time Complexity: O(log n)
// Space Complexity: O(1)