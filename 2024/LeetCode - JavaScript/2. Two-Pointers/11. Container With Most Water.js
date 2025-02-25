/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;
    let maxCalculation = 0;

    while (left < right) {
        let shorterBar = Math.min(height[left], height[right]);

        // store maximum caculated area
        maxCalculation = Math.max(maxCalculation, shorterBar * (right - left));

        // moving the pointers
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxCalculation
    
};

// Time Complexity: O(N)
// Space Complexity: O(1)