/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
 
    let map = {};

    for(let i of strs) {
        let key = i.split('').sort().join('');

        if(!map[key]) {
            map[key] = [i];
        } else {
            map[key].push(i);
        }
    } 

    return(Object.values(map));
    
};

// Time Complexity = O(m * nlogn) where m = number of words in strs | n = number of characters in each word
// Space Complexity = O(n)