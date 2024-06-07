var threeSum = function(nums) {
    // have to specify sort method as it is sorting integers 
    nums.sort((a, b) => a - b); 
    let resultArray = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate no need to recalculate if the previous nums[i] is the same value
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                resultArray.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the left index
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the right index 
                while (left < right && nums[right] === nums[right - 1]) right--; 

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return resultArray;
};

// Time Complexity: O(N^2)
// Space Complexity: O(1)