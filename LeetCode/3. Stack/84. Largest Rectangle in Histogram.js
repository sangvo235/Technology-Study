/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // append 0 to end of heights
    heights.push(0)

    let stack = [];
    let results = 0;

    for (let i = 0; i < heights.length; i++) {
        let heightStart = i;

        // stack.length - 1 = index of the last element in the stack since 0 indexed
        // accesses the second element (index 1) of the last element in the stack.
        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
            let [position, height] = stack.pop();
            results = Math.max(results, (i - position) * height)
            // starting index of the rectangle as the popped height's position.
            heightStart = position;
        }
        stack.push([heightStart, heights[i]])
    }

    return results;

};

// Time Complexity: O(N)
// Space Complexity: O(N)