/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let map = {}, windowMap = {};
    let left = 0, right = s1.length;

    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = ((map[s1[i]] || 0) + 1);
    }

    for (let i = 0; i < s1.length; i++) {
        windowMap[s2[i]] = (windowMap[s2[i]] || 0) + 1;
    }

    if (isMapEqual(map, windowMap)) return true;

    while (right < s2.length) {
        windowMap[s2[right]] = (windowMap[s2[right]] || 0) + 1;
            
        if (windowMap[s2[left]] > 1) {
            windowMap[s2[left]]--;
        } else {
            delete windowMap[s2[left]];
        }

        left++;
        right++;

        if (isMapEqual(map, windowMap)) return true;
    }

    return false;
};

function isMapEqual(map1, map2) {
    for (let key in map1) {
        if (map1[key] !== map2[key]) return false;
    }
    return true;
}

// Two Map Solution
// Time Complexity: O(n)
// Space Complexity: O(n)