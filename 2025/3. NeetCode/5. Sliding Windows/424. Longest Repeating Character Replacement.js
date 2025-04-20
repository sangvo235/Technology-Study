/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxLength = 0;
    let highestFreq = 0; 
    let map = {};

    for(let right = 0; right < s.length; right++) {
        if(!(map[s[right]])) {
            map[s[right]] = 0;
        } 
        map[s[right]]++;

        highestFreq = Math.max(highestFreq, map[s[right]]);

        // if temp length - highestFreq > k, we ran out of k's as replacements for highestFreq char
        if (right - left + 1 - highestFreq > k) {
            map[s[left]]--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
