/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length != t.length) return false;

    let map = {};

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];

        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        let letter = t[i];

        if(map[letter] === undefined) {
            return false;
        } 

        map[letter]--;

        if(map[letter] < 0) {
            return false;
        }

    }
    return true;

};

// Time Complexity = O(n + m)
// Space Complexity = O(n)