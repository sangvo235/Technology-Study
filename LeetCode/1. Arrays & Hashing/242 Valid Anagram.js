/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length == t.length) {
        return (sorter(s) == sorter(t))
    }
    return false
};

function sorter(str) {
    // String --> Array --> Sort --> String
    return str.split('').sort().join('')
}

// Time Complexity: O(nlogn)
// Space Complexity: O(n)