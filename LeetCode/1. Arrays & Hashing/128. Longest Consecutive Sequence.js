/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let maxCount = 1;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentCount = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentCount++;
            }
            
            maxCount = Math.max(maxCount, currentCount);
        }
    }
    
    return maxCount;
};

// Time Complexity: O(N) 
// Space Complexity: O(N)