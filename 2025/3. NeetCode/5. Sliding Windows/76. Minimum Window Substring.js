/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    let map = {};

    for (let i = 0; i < t.length; i++) {
        map[t[i]] = ((map[t[i]] || 0) + 1);
    }

    let left = 0, right = 0;
    let len = Infinity;
    // since plain objects don't have .size, only when using Map();
    // intialise after iterating through the t array
    let count = Object.keys(map).length; 
    let minWindow = "";

    while (right < s.length) {
        if (map[s[right]] !== undefined) {
            map[s[right]]--;
            if (map[s[right]] === 0) count--;
        }

        right++; 

        while(count === 0) {
            if (right - left < len) {
                len = right - left;
                minWindow = s.slice(left, right);
            }

            if (map[s[left]] !== undefined) {
                map[s[left]]++;
                if (map[s[left]] > 0) count++;
            }

            left++;
        }
    }

    return minWindow;
};

// Time Complexity: O(m + n)
// Space Complexity: O(n)