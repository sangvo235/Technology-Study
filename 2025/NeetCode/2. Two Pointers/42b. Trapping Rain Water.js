/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let left = 0;
    let right = height.length - 1;
    let maxHeightLeft = 0;
    let maxHeightRight = 0;
    let trappedWater = 0;

    while (left < right) {
        maxHeightLeft = Math.max(maxHeightLeft, height[left]);
        maxHeightRight = Math.max(maxHeightRight, height[right]);
        
        if (height[left] < height[right]) {
            trappedWater += maxHeightLeft - height[left];
            left++;
        } else {
            trappedWater += maxHeightRight - height[right];
            right--;
        }
    }

    return trappedWater;
};

// Time Complexity: 2n --> O(n)
// Space Complexity: O(1)