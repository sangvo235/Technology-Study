/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // if array length is 2 or less you can't store any water
    if (height.length <= 2) {
        return 0
    }

    let water = 0;
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        if(height[left] < height[right]) {
            // for left side --> if the current position is higher than the previous max
            if(height[left] > leftMax) {
                // max height adjust
                leftMax = height[left];
            } else {
                // calculate water trapped
                water += leftMax - height[left]
            }
            left++;
        } else {
            // for right side --> if the current position is higher than the previous max
            if(height[right] > rightMax) {
                // max height adjust
                rightMax = height[right];
            } else {
                // calculate water trapped
                water += rightMax - height[right]
            }
            right--;
        }
    }
    return water;
    
};

// Time Complexity: O(N)
// Space Complexity: O(1)