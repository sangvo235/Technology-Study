/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;
    let areaMax = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right-left);
        areaMax = Math.max(areaMax, area);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return areaMax;
};

// Time Complexity: O(n)
// Space Complexity: O(1)