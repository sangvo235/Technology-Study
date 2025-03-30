/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    generate(result, n, "", 0, 0)

    return result;
};

function generate(result, n, curr, openCount, closeCount) {

    console.log(curr)

    if(openCount > n) return;

    // Base case - if we formed a value sequence
    if(openCount === n && closeCount === openCount) {
        result.push(curr);
        return;
    }

    generate(result, n, curr + "(", openCount + 1, closeCount);

    if(openCount > closeCount) {
        generate(result, n, curr + ")", openCount, closeCount + 1);
    }

}

// Time Complexity: O(2^n) where n = number of pairs of parentheses --> less due to pruning invalid combos early
// Space Complexity: O(2^n) where n = number of pairs of parentheses  --> less due to pruning invalid combos early