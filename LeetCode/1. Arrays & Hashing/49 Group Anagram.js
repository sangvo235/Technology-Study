/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const getKey = (string) => {
    return string.split('').sort().join('')
}

var groupAnagrams = function(strs) {
    const buckets = {};

    for (let el of strs) {
        const key = getKey(el);
        if(!buckets[key]) {
            buckets[key] = [el]
        } else {
            buckets[key].push(el)
        }
    }
    return Object.values(buckets)
    
};

// Time Complexity: O(nlogn)
// Space Complexity: O(n)