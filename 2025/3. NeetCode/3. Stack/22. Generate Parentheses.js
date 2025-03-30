/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    backtrack(result, n, "", 0, 0)

    return result;
};

function backtrack(result, n, curr, openCount, closeCount) {

    // Base case - if we formed a value sequence
    if(openCount === n && closeCount === openCount) {
        result.push(curr);
        return;
    }

    if(openCount < n) {
        backtrack(result, n, curr + "(", openCount + 1, closeCount);
    }

    if(openCount > closeCount) {
        backtrack(result, n, curr + ")", openCount, closeCount + 1);
    }

}

// Time Complexity: O(2^n) where n = number of pairs of parentheses --> less due to pruning invalid combos early
// Space Complexity: O(2^n) where n = number of pairs of parentheses  --> less due to pruning invalid combos early