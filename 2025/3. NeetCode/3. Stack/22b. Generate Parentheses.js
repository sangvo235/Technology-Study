/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];

    function backtrack(n, current, open, close) {
    
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
    
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        } 
            
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack(n, "", 0, 0);
    return result;
};

// Time Complexity: O(2^n) where n = number of pairs of parentheses --> less due to pruning invalid combos early
// Space Complexity: O(2^n) where n = number of pairs of parentheses  --> less due to pruning invalid combos early

