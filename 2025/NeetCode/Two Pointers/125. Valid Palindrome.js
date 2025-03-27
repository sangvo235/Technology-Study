/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        if (!isAlphanumeric(s[left])) {
            left++;
            continue;
        }

        if (!isAlphanumeric(s[right])) {
            right--;
            continue;
        }

        if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;   
};

function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}

// Time Complexity = O(n)
// Space Complexity = O(1)