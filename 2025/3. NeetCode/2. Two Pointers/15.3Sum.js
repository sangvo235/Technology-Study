/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    
    let result = [];

    for(let i = 0; i < nums.length-2; i++ ) {
        // Skip duplicate no need to recalculate if the previous nums[i] is the same value
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);

                // Skip duplicates
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};

// Time Complexity: nlogn + n^2 --> O(n^2)
// Space Complexity: ignoring out put array --> O(1)