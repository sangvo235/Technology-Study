/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
 
    let map = {};

    for(let i of strs) {
        let key = i.split('').sort().join('');

        if(!map[key]) {
            map[key] = [i];
        } else {
            map[key].push(i);
        }
    } 

    return(Object.values(map));
    
};

