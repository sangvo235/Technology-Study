/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = ~~((left + right) / 2)

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }

    } 
    // as when left === right then the smallest value is reached
    return nums[left];
};

// Time Complexity: O(log n)
// Space Complexity: O(1)