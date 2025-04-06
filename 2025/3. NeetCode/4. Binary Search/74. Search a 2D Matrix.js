/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    function recursion(left, right) {
        let mid = Math.floor((left + right)/ 2);
        let row = Math.floor(mid / numCols);
        let col = mid % numCols;

        if (left > right) return false;

        if (target === matrix[row][col]) return true;
        else if (target < matrix[row][col]) return recursion(left, mid - 1);
        else return recursion (mid + 1, right);
    }

    return recursion(0, numRows * numCols - 1);
};

// Time Complexity: O(log(m*n))
// Space Complexity: O(log(m*n))