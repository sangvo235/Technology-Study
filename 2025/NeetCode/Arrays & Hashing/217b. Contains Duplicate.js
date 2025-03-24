/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) {
            return true;
        } 
    }
    return false;

};

const nums = [8, 4, 3, 1, 6, 2];
console.log(containsDuplicate(nums));

// Time Complexity = O(nlogn)
// Space Complexity = O(1)