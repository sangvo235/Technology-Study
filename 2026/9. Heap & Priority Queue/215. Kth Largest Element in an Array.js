/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

// Using Sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1)