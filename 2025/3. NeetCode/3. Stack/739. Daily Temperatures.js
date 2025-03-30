/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let result = new Array(n).fill(0);

    for(let i = 0; i < n; i++) {
        // current temp > temp at top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            // result stores difference between indexes/days 
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
};

// Time Complexity: O(n)
// Space Complexity: O(n)