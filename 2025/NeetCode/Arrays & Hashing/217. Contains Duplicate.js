/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    return new Set(nums).size !== nums.length;

};

// Time Complexity = O(n)
// Space Complexity = O(n)