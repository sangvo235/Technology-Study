/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let set = new Set(nums);
    let maxCount = 0;

    for (let num of set) {
        if (set.has(num - 1)) continue;

        let count = 1;

        while(set.has(num + 1)) {
            count++;
            num++;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};


// Time Complexity = O(n)
// Space Complexity = O(n)