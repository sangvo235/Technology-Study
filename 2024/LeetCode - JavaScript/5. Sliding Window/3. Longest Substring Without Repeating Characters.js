/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let set = new Set();
    let longestString = 0, left = 0, right = 0;

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            longestString = Math.max(longestString, set.size);
            right++;
        } else {
            set.delete(s[left])
            left++;
        }
    }

    return longestString;

};

// Time Complexity: O(n)
// Space Complexity: O(n)