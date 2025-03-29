/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if (s.length % 2 !== 0) return false;

    let stack = [];

    // object act like dictionary - check closing matches open
    let matchingBrackets  = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[s[i]]) return false;
        }
    }
    return stack.length === 0;
};

// Time Complexity: O(n)
// Space Complexity: O(n)