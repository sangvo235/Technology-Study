/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numberToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        numberToIndex[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const numberNeeded = target - nums[i];

        // To ensure we don't use the same element twice
        if (numberToIndex[numberNeeded] !== undefined 
            && numberToIndex [numberNeeded] !== i) {
                return [i, numberToIndex[numberNeeded]]
        }
    }
    
};

// Two Pass - Hash Map
// Time Complexity: O(N) 
// Space Complexity: O(N)