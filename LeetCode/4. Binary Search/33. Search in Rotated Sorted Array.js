/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = ~~((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // checking for sorted side
        if (nums[mid] < nums[right]) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if(target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

    }
    return -1; 
};

// Time Complexity: O(log n)
// Space Complexity: O(1)