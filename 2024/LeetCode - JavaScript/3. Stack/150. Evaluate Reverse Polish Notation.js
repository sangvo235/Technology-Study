/**
 * @param {string[]} tokens
 * @return {number}
 */

const operations = {
    '+': (a,b) => Number(a) + Number(b),
    '*': (a,b) => Number(a) * Number(b),

    // it pops a first then b hence why operations is reversed
    '-': (a,b) => Number(b) - Number(a),
    '/': (a,b) => Math.trunc(Number(b) / Number(a))
}

var evalRPN = function(tokens) {
    const stack = [];

    for(let v of tokens) {
        if(operations[v]) {
            stack.push(operations[v](stack.pop(),stack.pop()))
        } else {
            stack.push(v)
        }
    }
    return stack[0]
};

// Time Complexity: O(N)
// Space Complexity: O(N)