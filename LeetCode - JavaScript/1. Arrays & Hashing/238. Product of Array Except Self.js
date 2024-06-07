/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let answer = [];

    let leftProduct = 1;
    for(let i=0; i<nums.length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for(j=nums.length-1; j>=0; j--) {
        answer[j] *= rightProduct;
        rightProduct *= nums[j];
    }

    return answer;

};

// Time Complexity: O(N)
// Space Complexity: O(1)