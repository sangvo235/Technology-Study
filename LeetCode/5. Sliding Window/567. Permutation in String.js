/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if (s1.length > s2.length) return false;

    let map = {}, windowMap = {};
    let left = 0, right = 0;
    
    for(let i = 0; i < s1.length; i++) {
        map[s1[i]] = (map[s1[i]] || 0) + 1;
    }

    for (let i = 0; i < s1.length; i++) {
        windowMap[s2[i]] = (windowMap[s2[i]] || 0) + 1;
    }

    if(isMapEqual(map, windowMap)) return true;

    // as the windowMap already contains up to s1.length
    for(right = s1.length; right < s2.length; right++) {
        windowMap[s2[right]] = (windowMap[s2[right]] || 0) + 1;

        console.log(windowMap)

        if(windowMap[s2[left]] > 1) {
            windowMap[s2[left]]--;
        } else {
            delete windowMap[s2[left]];
        }
        left++;

        if(isMapEqual(map, windowMap)) return true;
    }

    return false;
};

function isMapEqual(map1, map2) {
    for (let key in map1) {
        if (map1[key] !== map2[key]) return false;
    }
    return true
}

// Time Complexity: O(n)
// Space Complexity: O(n)