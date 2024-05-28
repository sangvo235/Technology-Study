/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    // instantiate map --> {element : # of times seen}
    // {1:3, 2:2, 3:1} for example 1
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    // Create bucket eg. [[], [], [], ...]
    let bucket = [];
    for(let i = 0; i <= nums.length; i++) {
        bucket.push([])
    }

    // Populate buckets
    for(let key in map) {
        let count = map[key]
        bucket[count].push(key)
    }
    
    // Form results
    let result = [];
    for(let i = bucket.length-1; i>=0; i--) {
        if(bucket[i].length === 0) {
            continue
        } else {
            result = [...result, ...bucket[i]]
            // eg. [1,2,3]
        }
    }
    return result.slice(0,k)
    // eg. [1,2]

};

// Time Complexity: O(N)
// Space Complexity: O(N)