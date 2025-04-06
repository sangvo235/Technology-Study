/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    function recursion(left, right) {
        let mid = Math.floor((left + right) / 2);

        if (left > right) return -1;

        if (target === nums[mid]) return mid;
        else if (target < nums[mid]) return recursion(left, mid - 1);
        else return recursion(mid + 1, right);
    }

    return recursion (0, nums.length - 1);
};

// Time Complexity = O(logn)
// Space Complexity = O(logn)