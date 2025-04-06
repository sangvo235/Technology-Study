/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let map = new Map();
    let bucket = new Array();
    let result = new Array();
    
    for(let i = 0; i < nums.length; i++) {
        let key = nums[i];
        
        if(!map[key]) {
            map[key] = 1;
        } else {
            map[key]++; 
        }
    }

    for(let [key, value] of Object.entries(map)) {
        if(!bucket[value]) {
            bucket[value] = new Set().add(key);
        } else {
            bucket[value] = bucket[value].add(key);
        }
    }

    for(let i = bucket.length-1; i>=0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }

    return result.map(Number);

}; 

// Time Complexity = O(n+k)
// Space Complexity = O(n)