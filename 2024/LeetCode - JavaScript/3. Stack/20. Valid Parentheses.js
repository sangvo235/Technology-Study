/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];

    if (s.length % 2 !== 0) return false;

    for (let i=0; i<s.length; i++) {
        let char = s[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            let prevValue = stack.pop();

            if (prevValue === "(" && char !== ")") return false;
            if (prevValue === "{" && char !== "}") return false;
            if (prevValue === "[" && char !== "]") return false;
            if (prevValue === undefined) return false;
        }
    }
    return stack.length === 0;
};

// Time Complexity: O(N)
// Space Complexity: O(N)