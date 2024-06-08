/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let slow = 0;
    let fast = 0;

    while(true) {
        fast = nums[nums[fast]];
        slow = nums[slow];

        // Eg. i =       [0 1 2 3 4]
        // Eg. nums[i] = [3,1,3,4,2] 
        // fast === slow at nums[4] = 2
        if(fast === slow) {
            let pointer = 0;

            // loop continues until pointer === slow
            while(pointer !== slow) {
                pointer = nums[pointer];
                slow = nums[slow];
            }

            return pointer;
        }
    }

};

// Time Complexity: O(n)
// Space Complexity: O(1)