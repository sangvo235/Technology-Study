/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    // 1. Initialise pointers to zero.
    let slow = 0, fast = 0;
    
    // 2. Prove we have a cycle.
    while(true) {
        // Eg.       i = [0 1 2 3 4]
        // Eg. nums[i] = [3,1,3,4,2] 
        
        //        SLOW | FAST
        // nums[0] = 3 | nums[nums[0]] = 4
        // nums[3] = 4 | nums[nums[4]] = 3
        // nums[4] = 2 | nums[nums[3]] = 2 --> exit        
        fast = nums[nums[fast]];
        slow = nums[slow];

        if(fast === slow) break;
    }

    // 3. Find where the cycle is (by resetting fast pointer to 1x speed and index 0).
    fast = 0;

    while(fast != slow) {
        fast = nums[fast];
        slow = nums[slow];
    }

    return slow;
};

// Time Complexity: O(n)
// Space Complexity: O(1)