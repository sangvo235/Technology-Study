/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    let map = {};

    let topFrequency = 0, longest = 0, left = 0, right = 0;

    while (right < s.length) {
        map[s[right]] = map[s[right]] + 1 || 1;

        // character with the highest frequency
        topFrequency = Math.max(topFrequency, map[s[right]]);

        // window length is (right - left + 1) - highest frequency 
        // i.e. need to replace x values > k 
        // Let k = 2
        // [A]ABAAX[I] --> (6 - 0 + 1) - 4 > k --> 3 > 2 (increment LEFT)
        // A[A]BAAX[I] --> (6 - 1 + 1) - 3 > k --> 3 > 2 (increment LEFT)
        // AA[B]AAX[I] --> (6 - 2 + 1) - 2 > k --> 3 > 2 (increment LEFT)
        while((right - left + 1) - topFrequency > k) {
            map[s[left]]--;
            left++
        }
        // the equation gives us the largest window thats valid at a given time :)
        longest = Math.max(longest, (right - left + 1));

        // AAB[A]AX[I] --> (6 - 3 + 1) - 2 > k --> 2 > 2 (increment RIGHT)
        right++;
    }

    return longest;
};

// Time Complexity: O(n)
// Space Complexity: O(n)