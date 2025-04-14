/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let map = {};
    let left = 0, right = 0;
    // if count = 0, it means s1 and s2 window matches
    let count = s1.length;

    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = ((map[s1[i]] || 0) + 1);
    }

    while (right < s2.length) {
        if (map[s2[right]] > 0) count--;
        if (map[s2[right]] !== undefined) map[s2[right]]--;
        right++;
            
        if (right - left === s1.length) {
            if (count === 0) return true;

            if (map[s2[left]] !== undefined) {
                if (map[s2[left]] >= 0) count++;
                map[s2[left]]++;
            }
            left++;
        }
    }

    return false;
};

// One Map Solution
// Time Complexity: O(n)
// Space Complexity: O(n)