/**
 * @param {number} n
 * @return {string[]}
 */

// RECURSION WITH STACK
var generateParenthesis = function(n) {
    const stack = [];
    const result = [];

    const dfs = (open, close, string) => {
        if (string.length === 2 * n) {
            result.push(string);
            return;
        }

        if (open < n) {
            stack.push('(');
            dfs(open + 1, close, string + '(');
            stack.pop();
        }

        if (close < open) {
            stack.push(')');
            dfs(open, close + 1, string + ')');
            stack.pop();
        }

    }

    dfs(0, 0, '')

    return result;
};

// Time Complexity: O(2^n*2 * n)
// Space Complexity: O(2^n * n)

// RECURSION WITHOUT STACK
// var generateParenthesis = function(n) {
//     const result = [];

//     const dfs = (open, close, string) => {
//         if (string.length === n*2) {
//             result.push(string)
//             return
//         }

//         if (open) {
//             dfs(open-1, close, string+"(")
//         }

//         if (close>open) {
//             dfs(open, close-1, string+")")
//         }
//     }

//     // number of opening, closing and initialize string
//     dfs(n, n, '')

//     return result;
// };