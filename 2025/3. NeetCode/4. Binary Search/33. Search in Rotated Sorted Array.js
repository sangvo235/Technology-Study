/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) { // eg. nums has one value so left and right can be equal
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // left side array sorted
        if (nums[left] <= nums[mid]) {
            // if target is in the left side
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        // right side array sorted
        } else {
            // if target is in the right side
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};

// Time Complexity: O(logn)
// Space Complexity: O(1)