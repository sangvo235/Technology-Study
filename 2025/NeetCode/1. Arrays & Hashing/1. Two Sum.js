/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];  
        
        if(map.has(compliment)) {
            return [i, map.get(compliment)];
        } else {
            map.set(nums[i], i);
        }
    }
    return false;
    
};

// Time Complexity = O(n)
// Space Complexity = O(n)