/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let result = new Array(n).fill(0);

    for (let i= 0; i < n; i++) {
        // Checks if the current temp >= temp at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            // pops out top of stack as there is a warmer temp found --> the stack is now empty
            let index = stack.pop();
            // output result as diff between days
            result[index] = i - index;
        }
        // Push the current index onto the stack
        stack.push(i);
    }
    return result;
};

// Time Complexity: O(N)
// Space Complexity: O(N)