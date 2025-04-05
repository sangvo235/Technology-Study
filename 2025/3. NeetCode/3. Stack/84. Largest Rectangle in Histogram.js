/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);

    let stack = [];
    let maxArea = 0;

    for(let i = 0; i < heights.length; i++) {
        let heightStart = i;
    
        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
            let [position, height] = stack.pop();
            maxArea = Math.max(maxArea, (i - position) * height);
            heightStart = position;
        }

        stack.push([heightStart, heights[i]]);
    }
    return maxArea;
};

// Time Complexity: O(n)
// Space Complexity: O(n)