/**
 * Encodes a list of strings to a single string.
 * @param {string[]} strs
 * @returns {string}
 */
var encode = function(strs) {

    let result = "";

    for (const str of strs) {
        result += `${str.length}#${str}`;
    }

    return result;

};

/**
 * Decodes a single string to a list of strings
 * @param {string} s
 * @returns {string[]}
 */
var decode = function(s) {

    let result = [];
    let i = 0;
 
    while(i < s.length) {
        const pos = s.indexOf("#", i);
        const len = parseInt(s.slice(i, pos));
        i = pos + 1;
        const str = s.slice(i, i + len);
        result.push(str);
        i += len;
    }

    return result;

};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

console.log(decode(encode(["Hello", "World", "Sundayz"])));